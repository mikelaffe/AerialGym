/*
  # Add preferred_date column to contact_submissions table

  1. Changes
    - Add `preferred_date` (date, optional) column to `contact_submissions` table
    - This field stores the preferred booking date for performance bookings or private lessons
    
  2. Notes
    - Adding this column that was missing from the original table creation
    - This is a nullable column so existing data is not affected
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'preferred_date'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN preferred_date date;
  END IF;
END $$;