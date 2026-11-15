CREATE TABLE students (
  student_id SERIAL PRIMARY KEY,
  --serial auto incremented integer, primary key is unique and never be null
  first_name VARCHAR(50) NOT NULL,
  --my firstname should have max 50 letters
  last_name VARCHAR(50),
  email VARCHAR(322) UNIQUE NOT NULL,
  phone_number VARCHAR(10) UNIQUE,
  country_code VARCHAR(4),
  age INT CHECK (age > 12),
  current_status VARCHAR(20) DEFAULT 'active' CHECK (
    current_status IN ('active', 'graduated', 'dropped_out')
  ),
  masterji_handle VARCHAR(50) UNIQUE, 
  -- masterji username
  has_joined_masterji BOOLEAN DEFAULT FALSE,
  current_score INT DEFAULT 0 CHECK (
    current_score >= 0
    AND current_score <= 100
  ),
  enrollment_date DATE DEFAULT CURRENT_DATE --This is UTC
):
ALTER TABLE students
ADD COLUMN batch_name VARCHAR(50) DEFAULT 'Web Dev 2026!' 




--What is DDl?