-- Exercise 1 : Items And Customers


-- SELECT * FROM items;

--1.
-- SELECT * FROM items
-- ORDER BY Price;

--2.
-- SELECT * FROM items
-- ORDER BY Price DESC;

--3.
-- SELECT * FROM customers
-- SELECT * FROM Customers
-- ORDER BY first_name;

--4.
-- SELECT * FROM customers
-- ORDER BY last_name DESC;


--  Exercise 2 : Dvdrental Database

--1.
-- SELECT  * FROM customer
--2.
-- SELECT CONCAT_WS ('-', first_name,last_name) AS full_name
-- FROM customer;

--3.
-- SELECT create_date FROM customer;

--4.

-- SELECT * FROM Customer
-- ORDER BY first_name DESC;

--5.
-- SELECT DISTINCT film_ID, title, description, release_year , rental_rate 
-- FROM film ORDER BY rental_rate;

--6.
-- SELECT * FROM address
-- SELECT address, phone FROM address WHERE district='Texas';

--7.
-- SELECT * FROM film WHERE (film_id=150 OR film_id=15);

--8.
-- SELECT film_ID, title, description, length, rental_rate
-- FROM film WHERE title = ('Ali Forever');

--9.
-- SELECT film_ID, title, description, length, rental_rate FROM film WHERE title ILIKE 'al%'

--10.
-- SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10

--11.
-- SELECT * FROM film ORDER BY rental_rate ASC FETCH FIRST 10 ROWS ONLY

--12.
-- SELECT customer.first_name, Customer.last_Name, payment.amount,
-- payment.payment_date
-- FROM customer
-- INNER JOIN payment ON customer.customer_id=payment.customer_id ORDER BY payment.customer_id;

--13.
-- SELECT * FROM inventory
-- SELECT * FROM film LEFT JOIN INVENTORY ON film.film_id
-- = inventory.film_id WHERE inventory IS NULL;

--14.
-- SELECT * FROM country INNER JOIN city ON city.country_id = country.country_id

--15.
SELECT  customer.customer_id, first_name,last_name,amount,payment_date  FROM payment INNER JOIN customer ON customer.customer_id = 
payment.customer_id ORDER BY staff_id ASC;


