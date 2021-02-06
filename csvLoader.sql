\c postgres;
COPY sdc.shop(_id)
FROM '/Users/pcottman/Documents/Work/patty-reviews-service/CSV/shop.csv'
DELIMITER ','
CSV HEADER;

COPY sdc.shopreviews(_id, avatar, name, date, rating, description, imageURL, reccommend, purchaseditem, shopimage)
FROM '/Users/pcottman/Documents/Work/patty-reviews-service/CSV/shopreviews.csv'
DELIMITER ','
CSV HEADER;