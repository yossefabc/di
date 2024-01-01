-- Exercise 1: DVD Rental
--1.
-- SELECT * FROM LANGUAGE;
--2.
-- SELECT  title, description,name
-- FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id ;
-- SELECT * FROM film
--3.
-- SELECT  title, description,name
-- FROM language
-- INNER  JOIN film
-- ON film.language_id = language.language_id ;
--4.
-- CREATE TABLE new_films( 
--   id SERIAL PRIMARY KEY,
--   name VARCHAR (50)NOT NULL);
  
--  INSERT INTO new_films(name)
--  VALUES('HANKOK'),('IRON MAN'),('SPIDERMAN');
 
--  SELECT* FROM new_films

--5.
-- CREATE TABLE customer_review(
-- review_id SERIAL PRIMARY KEY NOT NULL,
-- film_id	INT NOT NULL,
-- language_id INT NOT NULL,
-- title VARCHAR (100) NOT NULL,
-- score INT NOT NULL,
-- review_text TEXT,         
-- last_update	TIMESTAMP,
-- CONSTRAINT fk_language_id FOREIGN KEY (language_id) REFERENCES language (language_id),
-- CONSTRAINT fk_film_id FOREIGN KEY (film_id) REFERENCES new_films (id) ON DELETE CASCADE,
-- CONSTRAINT score_value CHECK (score > 0 AND score <= 10)	


--6.
-- SELECT * FROM customer_review

-- INSERT INTO customer_review(film_id,language_id,title,score,review_text)VALUES
-- ('1','1','action movie',7,'very nice movie'),('2','1','science finction','9','excellent movie')

--7.
-- SELECT * FROM new_films
-- DELETE FROM new_films WHERE (name='IRON MAN')

-- it delete the film from the customer_review too


-- Exercise 2 : DVD Rental
--1.
-- UPDATE language
-- SET name = 'swahili'
-- WHERE language_id = 1;

--2.
-- SELECT * FROM customer
--3.
-- DROP TABLE customer_review;
-- easy task
--4.
-- SELECT * FROM rental
-- SELECT * FROM rental WHERE (return_date IS NULL)

--5.
-- SELECT * FROM rental 
-- INNER JOIN inventory ON rental.inventory_id=inventory.inventory_id
-- LEFT JOIN film ON inventory.film_id=film.film_id
-- WHERE rental.return_date IS NULL
-- ORDER BY film.replacement_cost DESC
-- LIMIT 30



