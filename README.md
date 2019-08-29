# Bamazon

Command line interface (CLI) Amazon-like storefront using MySQL and Node.js  

[Link to Bamazon Demo!](https://drive.google.com/file/d/1iQY7eqmP2IergPcwja7xSmvU6dcaHx5b/view?usp=sharing) 

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

### Letter.js

This file contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

  * A string value to store the underlying character for the letter

 