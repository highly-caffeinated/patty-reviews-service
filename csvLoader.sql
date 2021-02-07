\c postgres;
COPY sdc.shop(_id)
FROM '/Users/pcottman/Documents/Work/patty-reviews-service/CSV/shop.csv'
DELIMITER ','
CSV HEADER;

COPY sdc.shopreviews(_id, avatar, name, date, rating, description, imageURL, reccommend, purchaseditem, shopimage)
FROM '/Users/pcottman/Documents/Work/patty-reviews-service/CSV/shopreviews2.csv'
DELIMITER ','
CSV HEADER;

COPY sdc.shopreviews(_id, avatar, name, date, rating, description, imageURL, reccommend, purchaseditem, shopimage)
FROM '/Users/pcottman/Documents/Work/patty-reviews-service/CSV/shopreviews4.csv'
DELIMITER ','
CSV HEADER;

COPY sdc.shopreviews(_id, avatar, name, date, rating, description, imageURL, reccommend, purchaseditem, shopimage)
FROM '/Users/pcottman/Documents/Work/patty-reviews-service/CSV/shopreviews6.csv'
DELIMITER ','
CSV HEADER;

COPY sdc.shopreviews(_id, avatar, name, date, rating, description, imageURL, reccommend, purchaseditem, shopimage)
FROM '/Users/pcottman/Documents/Work/patty-reviews-service/CSV/shopreviews8.csv'
DELIMITER ','
CSV HEADER;

COPY sdc.shopreviews(_id, avatar, name, date, rating, description, imageURL, reccommend, purchaseditem, shopimage)
FROM '/Users/pcottman/Documents/Work/patty-reviews-service/CSV/shopreviews9.csv'
DELIMITER ','
CSV HEADER;

COPY sdc.shopreviews(_id, avatar, name, date, rating, description, imageURL, reccommend, purchaseditem, shopimage)
FROM '/Users/pcottman/Documents/Work/patty-reviews-service/CSV/shopreviews10.csv'
DELIMITER ','
CSV HEADER;