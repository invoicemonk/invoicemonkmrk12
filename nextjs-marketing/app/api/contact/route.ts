import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    // Access environment variables at runtime, not build time
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    const brevoApiKey = process.env.BREVO_API_KEY;

    // Validate environment variables
    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    if (!brevoApiKey) {
      console.error('Missing Brevo API key');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    // Validate inputs
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        subject,
        message,
        status: 'new',
      });

    if (dbError) {
      console.error('Supabase error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save message' },
        { status: 500 }
      );
    }

    // Send emails via Brevo
    const emailContent = {
      sender: {
        name: 'InvoiceMonk Website',
        email: 'noreply@invoicemonk.com',
      },
      to: [
        { email: 'info@invoicemonk.com', name: 'InvoiceMonk Info' },
        { email: 'support@invoicemonk.com', name: 'InvoiceMonk Support' },
      ],
      subject: `New Contact Form: ${subject}`,
      htmlContent: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
              <h2 style="color: #d80000; border-bottom: 2px solid #d80000; padding-bottom: 10px;">New Contact Form Submission</h2>
              
              <div style="margin: 20px 0;">
                <p><strong style="color: #555;">Name:</strong> ${firstName} ${lastName}</p>
                <p><strong style="color: #555;">Email:</strong> <a href="mailto:${email}" style="color: #d80000;">${email}</a></p>
                <p><strong style="color: #555;">Subject:</strong> ${subject}</p>
              </div>
              
              <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #d80000; margin: 20px 0;">
                <p><strong style="color: #555;">Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #888;">
                <p>This message was sent from the InvoiceMonk contact form at invoicemonk.com</p>
                <p>Submitted on: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify(emailContent),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.text();
      console.error('Brevo error:', errorData);
      // Don't fail the request if email fails, message is already saved
      return NextResponse.json({
        success: true,
        warning: 'Message saved but email notification failed',
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred processing your request' },
      { status: 500 }
    );
  }
}
