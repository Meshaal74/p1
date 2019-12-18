create database events;
use events;
create table if not exists event(
	event_type varchar(40),
    target varchar(40),
    event_date date
);
select * from event;