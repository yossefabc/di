-- Part I
--1.
-- CREATE TABLE customer (
--   id SERIAL PRIMARY KEY,
--   first_name VARCHAR (50) NOT NULL,
--   last_name VARCHAR (50) NOT NULL	
-- );

-- CREATE TABLE customer_profile (
--    id SERIAL PRIMARY KEY,
-- 	isLoggedIn BOOLEAN,
-- 	customer_id INTEGER
-- );

--2.

-- INSERT into customer(first_name, last_name) VALUES 
-- ('john', 'doe'),
-- ('jerome', 'lalu'),
-- ('lea', 'rive');

--3.
-- SELECT first_name, last_Name 
-- FROM customer
-- INNER JOIN customer_profile ON customer.id = customer_profile.id;


-- Part II:

--1.
-- CREATE TABLE book (
-- book_id SERIAL PRIMARY KEY,
-- 	title_name VARCHAR (50) NOT NULL,
-- 	author_name VARCHAR(50) NOT NULL
-- )
--2. 
-- INSERT INTO book (title_name,author_name)
-- VALUES('Alice In Wonderland',' Lewis Carroll'),('Harry Potter',' J.K Rowling'),
-- ('To kill a mockingbird','Harper Lee');
-- SELECT * FROM book

--3.
-- CREATE TABLE student(
-- student_id SERIAL PRIMARY KEY,
-- name VARCHAR(50) NOT NULL UNIQUE,
-- age INTEGER NOT NULL
-- )

--4.
-- INSERT INTO student(name,age)VALUES(
-- 'john',12),('lera',11),('patrick',10),('bob',14);


--5.
-- CREATE TABLE library (
--   student_id INTEGER NOT NULL,
--   book_id INTEGER NOT NULL,
--   borrowed_date INTEGER NOT NULL ,
--   PRIMARY KEY (student_id, book_id),
--   FOREIGN KEY (student_id) REFERENCES student(student_id) ON UPDATE CASCADE,
--   FOREIGN KEY (book_id) REFERENCES book(book_id) ON UPDATE CASCADE
-- );

--6.
-- INSERT into library(student_id, book_id) VALUES 
-- ((SELECT student_id FROM student WHERE name = 'john'), 
--  (SELECT book_id FROM book WHERE title_name='Alice In Wonderland' ))

