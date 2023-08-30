const DB = require("./config/connection.js");
const inquirer = require("inquirer");
const mainMenu = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "action",
            choices: [
                "View All Employees",]
        }]).then((answer) => {
            console.log(answer);
        })
    }
    mainMenu();