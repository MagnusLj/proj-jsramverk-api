DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS stuff;

CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS stuff (
    type VARCHAR(30) NOT NULL,
    blahblah VARCHAR(300),
    kmom INT(2)
);
