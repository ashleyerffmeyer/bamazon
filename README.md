# Bamazon

Command line interface (CLI) Amazon-like storefront using MySQL and Node.js  

[Link to Bamazon Demo!](https://drive.google.com/file/d/1oYwg8tB3UqN4bJZ26TUmWUXmKdre86iV/view?usp=sharing) 

## Authors
Ashley Erffmeyer, with major support from KU's Coding Boot Camp staff members:
* Ryan LaRue (Instructor)
* Jenny Dean (TA)
* Eli Vargas (TA)
* Seth Willis (TA)

## Tools Used
* JavaScript
* MySQL
* Node.js
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [MySQL](https://www.npmjs.com/package/mysql)


## Prerequisites & Installations

In order to run this command line node app, first install node.js and npm. To install the app, clone this repository and use 'npm install' to gather dependencies specified in the package.json file (inquirer and MySQL). The depencencies are needed for data input and storage in the database.

## Application Overview

The app will take in orders from customers using the `inquirer` npm packages and deplete stock from the store's inventory. As a bonus, the application will also track product sales across Bamazon departments and then provide a summary of the highest-grossing departments in the store.

## Instructions

In the MySQL database called `bamazon`, there is a table of products that contains 10 different products and the following product information:
* item_id (unique id for each product)
* product_name (Name of product)
* department_name
* price (cost to customer)
* stock_quantity (how much of the product is available in stores)

When run, the Node application called `bamazon.js`, will first display all of the items available for sale. The app then prompts customers with two messages:
* The first message asks the user the ID of the product they would like to buy

        What would you like to purchase? [Quit with Q] 

* The second message asks the user how many units of the product they would like to buy.
   
        How many would you like to buy?

Once the customer has placed the order, the application checks if Bamazon has enough of the product to meet the customer's request. 

* If not, the app logs `Insufficient quantity!`, and prevents the order from going through.

* If Bamazon _does_ have enough of the product, the application fulfills the customer's order.
   * The mySQL database is updated to reflect the remaining quantity.
   * Once the update goes through, the application shows the customer the total cost of their purchase.

 