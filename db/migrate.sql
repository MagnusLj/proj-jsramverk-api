DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS stuff;

CREATE TABLE IF NOT EXISTS users (
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    day INT(3) NOT NULL,
    month VARCHAR(12) NOT NULL,
    year INT(5) NOT NULL,
    apples INT(5),
    pears INT(5),
    bananas INT(5),
    balance INT(9),
    UNIQUE(email)
);

-- CREATE TABLE IF NOT EXISTS stuff (
--     type VARCHAR(30) NOT NULL,
--     blahblah VARCHAR(300),
--     kmom INT(2)
-- );
