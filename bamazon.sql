CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
itemid INTEGER AUTO_INCREMENT NOT NULL,
prodname VARCHAR(50) NOT NULL,
deptname VARCHAR(50) NOT NULL,
price DECIMAL (15,4) NOT NULL,
stockqty INTEGER (15) NOT NULL,
PRIMARY KEY (itemid) 
);