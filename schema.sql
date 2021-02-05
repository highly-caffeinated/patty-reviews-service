CREATE SCHEMA sdc

CREATE TABLE products(
  _id INT NOT NULL PRIMARY KEY,
  total INT NOT NULL,
  average INT NOT NULL
)

CREATE TABLE shopreviews(
  recordId INT NOT NULL AUTO_INCREMENT PRIMARY KEY
  _id FOREIGN KEY REFERENCES products(_id)
  avatar varchar(20) NOT NULL,
  name varchar(20) NOT NULL,
  date varchar(20) NOT NULL,
  rating INT NOT NULL,
  description varchar(300),
  imageURL varchar(20),
  reccommend INT NOT NULL,
  purchasedItem varchar(20),
  shopImage varchar(20)
)