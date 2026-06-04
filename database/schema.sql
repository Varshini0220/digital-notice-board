-- Table for storing notices
CREATE TABLE dnb.Notices (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  categoryId INT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expiresAt TIMESTAMP
);

-- Table for categories
CREATE TABLE dnb.Categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

-- Table for student subscriptions
CREATE TABLE dnb.Subscriptions (
  id SERIAL PRIMARY KEY,
  studentId INT,
  categoryId INT
);

-- Table for read/unread tracking
CREATE TABLE dnb.ReadLogs (
  id SERIAL PRIMARY KEY,
  studentId INT,
  noticeId INT,
  readAt TIMESTAMP
);

-- Table for departments
CREATE TABLE dnb.Departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);
 
