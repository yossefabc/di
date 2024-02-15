create table products(
id serial primary key not null,
	name varchar(50) not null,
	price integer not null,
	description varchar(500)
)

select * from products

insert into products (name,price)
values('samsung s23',2000),
('samsung s24',3000)