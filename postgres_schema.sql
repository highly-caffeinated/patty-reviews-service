\c postgres;

DROP SCHEMA IF EXISTS sdc CASCADE;

CREATE SCHEMA sdc

CREATE TABLE sdc.shop(
  _id INT NOT NULL PRIMARY KEY
);

CREATE TABLE sdc.shopreviews(
  recordid SERIAL PRIMARY KEY,
  _id INT,
  avatar VARCHAR(200) NOT NULL,
  name VARCHAR(200) NOT NULL,
  date VARCHAR(200) NOT NULL,
  rating SMALLINT NOT NULL,
  description VARCHAR(500) NOT NULL,
  imageURL VARCHAR(200) NOT NULL,
  reccommend SMALLINT NOT NULL,
  purchasedItem VARCHAR(200) NOT NULL,
  shopImage VARCHAR(200) NOT NULL,
  CONSTRAINT fk_shopreviews
    FOREIGN KEY (_id)
    REFERENCES sdc.shop(_id)
);