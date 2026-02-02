import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");
    if (!BREVO_API_KEY) {
      console.error("BREVO_API_KEY is not configured");
      throw new Error("Email service not configured");
    }

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Supabase configuration missing");
      throw new Error("Database service not configured");
    }

    const formData: ContactFormData = await req.json();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate field lengths
    if (formData.firstName.length > 100 || formData.lastName.length > 100) {
      return new Response(
        JSON.stringify({ error: "Name fields must be under 100 characters" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (formData.subject.length > 200) {
      return new Response(
        JSON.stringify({ error: "Subject must be under 200 characters" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (formData.message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Message must be under 5000 characters" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Initialize Supabase client with service role key
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Save message to database
    const { error: dbError } = await supabase
      .from("contact_messages")
      .insert({
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        status: "new",
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save message");
    }

    console.log("Message saved to database successfully");

    // Send notification email to team via Brevo
    const teamEmailPayload = {
      sender: { 
        name: "Invoicemonk Contact Form", 
        email: "noreply@invoicemonk.com" 
      },
      to: [{ email: "hello@invoicemonk.com", name: "Invoicemonk Team" }],
      subject: `New Contact Form Submission: ${formData.subject}`,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #DC2626;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
          </div>
          <h3>Message:</h3>
          <div style="background: #fff; border: 1px solid #e5e5e5; padding: 20px; border-radius: 8px;">
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent via the Invoicemonk contact form.
          </p>
        </div>
      `,
    };

    const teamEmailResponse = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify(teamEmailPayload),
    });

    if (!teamEmailResponse.ok) {
      const errorData = await teamEmailResponse.text();
      console.error("Brevo API error (team email):", teamEmailResponse.status, errorData);
      // Don't fail the request if team email fails - message is already saved
    } else {
      console.log("Team notification email sent successfully");
    }

    // Send auto-response to user
    const userEmailPayload = {
      sender: { 
        name: "Invoicemonk", 
        email: "noreply@invoicemonk.com" 
      },
      to: [{ email: formData.email, name: `${formData.firstName} ${formData.lastName}` }],
      subject: "We received your message - Invoicemonk",
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0;">
            <h1 style="color: #DC2626; margin: 0;">Invoicemonk</h1>
          </div>
          <h2>Hi ${formData.firstName},</h2>
          <p>Thank you for contacting Invoicemonk! We've received your message and our team will get back to you within 24 hours.</p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Your message:</strong></p>
            <p style="margin: 0; color: #666;"><em>"${formData.subject}"</em></p>
          </div>
          <p>In the meantime, you might find these resources helpful:</p>
          <ul>
            <li><a href="https://invoicemonk.com/blog" style="color: #DC2626;">Read our blog</a> for tips on invoicing and business management</li>
            <li><a href="https://learn.invoicemonk.com" style="color: #DC2626;">Watch video tutorials</a> to get started quickly</li>
          </ul>
          <p>Best regards,<br><strong>The Invoicemonk Team</strong></p>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            © ${new Date().getFullYear()} Invoicemonk. All rights reserved.
          </p>
        </div>
      `,
    };

    const userEmailResponse = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify(userEmailPayload),
    });

    if (!userEmailResponse.ok) {
      const errorData = await userEmailResponse.text();
      console.error("Brevo API error (user email):", userEmailResponse.status, errorData);
      // Don't fail - message is saved
    } else {
      console.log("User confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: unknown) {
    console.error("Error in send-contact-message function:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
