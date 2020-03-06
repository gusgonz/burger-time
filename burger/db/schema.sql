DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id int auto_increment not null,
    burger_name VARCHAR(30) not null,
    devoured BOOLEAN not null,
    PRIMARY KEY (id)
);