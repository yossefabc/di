create table users(
id serial primary key not null,
	first_name varchar(50) not null,
	last_name varchar(50) not null,
	email varchar(50) not null,
	username varchar(50) not null,
	password integer not null
)

select * from users

