create table estates (
address varchar(500),
name varchar(100),
city varchar(50),
state varchar(30),
zip numeric
);


alter table estates
add column image varchar (5000);

alter table estates
add column mortgage integer;

alter table estates
add column desired_pay integer;