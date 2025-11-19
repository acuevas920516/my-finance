-- Create database if it doesn't exist
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'EurotaxDb')
BEGIN
    CREATE DATABASE EurotaxDb;
    PRINT 'Database EurotaxDb created successfully.';
END
ELSE
BEGIN
    PRINT 'Database EurotaxDb already exists.';
END
GO

