CREATE TABLE user(
    id varchar(50) PRIMARY KEY,
    username varchar(30) UNIQUE,
    email varchar(30) UNIQUE NOT NULL,
    password varchar(30) NOT NULL
);