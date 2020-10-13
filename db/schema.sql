-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
DROP DATABASE IF EXISTS targets;

-- CREATE YOUR DATABASE
CREATE DATABASE targets;

\c targets;


-- CREATE YOUR TABLES
CREATE TABLE products(
id serial,
name varchar,
account varchar,
rating integer,
comment varchar

);
--format to add multiple inserts from a file csv

COPY products(name,account,rating,comment)
FROM 'C:/Users/Jferg/Documents/SDC/John_SDC/frontend/src/data.csv'
WITH
DELIMITER ','
CSV HEADER

-- ADD RECORDS TO YOUR TABLE


