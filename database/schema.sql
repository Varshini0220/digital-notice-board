-- Table for storing notices
CREATE TABLE Notices (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  categoryId INT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expiresAt TIMESTAMP
);

-- Table for categories
CREATE TABLE Categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

-- Table for student subscriptions
CREATE TABLE Subscriptions (
  id SERIAL PRIMARY KEY,
  studentId INT,
  categoryId INT
);

-- Table for read/unread tracking
CREATE TABLE ReadLogs (
  id SERIAL PRIMARY KEY,
  studentId INT,
  noticeId INT,
  readAt TIMESTAMP
);

-- Table for departments
CREATE TABLE Departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);
 
