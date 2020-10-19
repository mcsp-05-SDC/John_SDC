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
FROM 'C:/Users/Jferg/Documents/SDC/John_SDC/db/data.csv'
WITH
DELIMITER ','
CSV HEADER;

COPY products(name,account,rating,comment)
FROM 'C:/Users/Jferg/Documents/SDC/John_SDC/db/data1.csv'
WITH
DELIMITER ','
CSV HEADER;

CREATE EXTENSION pg_trgm;
CREATE INDEX name_idx ON products USING gin(name gin_trgm_ops);

-- EXPLAIN ANALYZE SELECT * FROM products WHERE name ilike 'Generic Metal Keyboard' limit 1;
-- ADD RECORDS TO YOUR TABLE
-- tsv tsvector
-- UPDATE products SET tsv= to_tsvector(name);
-- CREATE TRIGGER tsv_trigger BEFORE INSERT OR UPDATE ON products FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger(tsv, 'pg_catalog.english', name);
-- CREATE INDEX tsv_search ON products(tsv);
-- tsv@@ to_tsquery($1)