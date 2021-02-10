\c postgres;

DROP SCHEMA IF EXISTS sdc CASCADE;

CREATE SCHEMA sdc

-- CREATE TABLE sdc.shop(
--   _id INT NOT NULL PRIMARY KEY
-- );

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
  shopImage VARCHAR(200) NOT NULL
);

create index idx_reviewId on sdc.shopreviews(_id);


--on your command line in the folder you want your new file to be located(cd/documents/work)
-- sudo -u pcottman pg_dump postgres > myfakedata.txt
--gzip myfakedata.txt


--in your EC2 instance terminal
-- sudo apt-get install -y postgresql-12

--if you didn't gzip, then
-- -- load your schema maybe using nano
-- sudo -u postgres psql < schema.sql
-- curl https://s3.amazonaws.com/sdc.slconsulting.us/schema-with-tables.sql | sudo -u postgres psql postgres
-- -- or if you gzipped, just type in this below
-- curl https://s3.amazonaws.com/sdc.slconsulting.us/schema-with-tables.sql.gz | gunzip -c | sudo -u postgres psql postgres
-- echo GRANT SELECT, UPDATE, INSERT ON TABLE images TO student\; | sudo -u postgres psql postgres