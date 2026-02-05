-- Create contact_messages table to store form submissions
CREATE TABLE public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for contact form - public submissions)
CREATE POLICY "Allow anonymous inserts" ON public.contact_messages
  FOR INSERT TO anon WITH CHECK (true);

-- Only authenticated users can read messages (for admin dashboard later)
CREATE POLICY "Authenticated users can read messages" ON public.contact_messages
  FOR SELECT TO authenticated USING (true);