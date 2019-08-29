// Requirements
var mysql = require('mysql');
var inquirer = require('inquirer');

// Establishing the connection with mySQL database
// Creating variable connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "19821982Ame$",
    database: "bamazon"
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connection is successful!");

    // Run makeATable function
    makeATable();
})

// Create makeATable function that gathers info from database
var makeATable = function () {

    // Create the initial table of info
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].itemid + " || " + res[i].prodname + " || " + res[i].deptname + " || " + res[i].price + " || " + res[i].stockqty + "\n")
        }
        // Run promptUser function
        promptUser(res);
    })
}

// Create the promptUser function that asks the user for input
var promptUser = function (res) {

    // Inquirer prmpt
    inquirer.prompt([{
        type: "input",
        name: "choice",
        message: "What would you like to purchase? [Quit with Q]"

        // Then perform the following actions
    }]).then(function (answer) {

        // Make correct false
        var correct = false;

        // If user provides Q, exit the process
        if (answer.choice.toUpperCase() == "Q") {
            process.exit();
        }

        for (var i = 0; i < res.length; i++) {

            // If the product name equals the user input choice, peform the following 
            if (res[i].prodname == answer.choice) {
                correct = true;
                var product = answer.choice;
                var id = i;

                // Prompt user for additional info
                inquirer.prompt({
                    type: "input",
                    name: "quantity",
                    message: "How many would you like to buy?",
                    validate: function (value) {
                        if (isNaN(value) == false) {
                            return true;
                        } else {
                            return false;
                        }
                    }

                    // Then update the database
                }).then(function (answer) {
                    if ((res[id].stockqty - answer.quantity) > 0) {
                        connection.query("UPDATE products SET stockqty=' " + (res[id].stockqty - answer.quantity) + " ' WHERE prodname='" + product + "'", function (err, res2) {
                            console.log("Prouduct Purchased!");
                            makeATable();
                        })
                        // If the user requested a quanity of items that does not exist, response with the following message
                    } else {
                        console.log("Insufficient quantity!");
                        promptUser(res);
                    }
                })
            }
        }
        // If the user does not provide valid input, response with the following message
        if (i == res.length && correct == false) {
            console.log("Not a valid selection!");
            promptUser(res);
        }
    })
}

