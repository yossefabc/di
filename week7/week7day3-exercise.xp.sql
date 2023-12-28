-- CREATE TABLE items(
--     id SERIAL PRIMARY KEY,
-- 	NAME VARCHAR(50) NOT NULL,
-- 	PRICE INTEGER NOT NULL
-- )

-- SELECT * FROM items;
-- INSERT INTO items(name,price)
-- VALUES('small desk',100),('large desk',300),
--       ('fan',80);
	  
	  
     

-- CREATE  TABLE customers(
--     id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(50) NOT NULL,
-- 	last_name VARCHAR (50) NOT NULL

-- )


-- SELECT * FROM CUSTOMERS;

-- INSERT INTO customers(first_name,last_name)
--             VALUES('GREG','JONES'),('SANDRA','JONES'),
-- 			('SCOTT','SCOTT'),('TREVOR','GREEN'),
-- 			('MELANIE','JONSON');

-- 3.1
-- SELECT 
-- name,
-- price
-- FROM
-- items;
--.2
--3.1 SELECT * FROM items 
--.2 SELECT * FROM items WHERE price > 80;
--.3 SELECT * FROM items WHERE price <=  300;
--.4 SELECT * FROM customers where last_name = 'SMITH';
--.5 SELECT * FROM CUSTOMERS WHERE last_name = 'JONES';
-- SELECT * FROM CUSTOMERS WHERE first_name != 'SCOTT';



