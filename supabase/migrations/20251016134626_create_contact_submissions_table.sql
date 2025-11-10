/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting
      - `email` (text) - Email address for contact
      - `phone` (text, optional) - Phone number
      - `subject` (text) - Subject/reason for contact (booking, question, etc.)
      - `preferred_date` (date, optional) - Preferred booking date for performances or private lessons
      - `message` (text) - The message content
      - `created_at` (timestamptz) - Timestamp of submission
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting submissions (public access for form submissions)
    - Add policy for authenticated users to read submissions (admin access)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  preferred_date date,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit contact forms
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (admin) to view submissions
CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);