const Shapes = require("../SVG-generator/lib/Shapes");
const Circle = require("../SVG-generator/lib/Circle");
const Square = require("../SVG-generator/lib/Square");
const Triangle = require("../SVG-generator/lib/Triangle");

const inquirer = require("inquirer");
const fs = require("fs");

function ask(){
    inquirer
    .prompt([
        {
            type: "input",
            name: 'logoName',
            message: "Enter a name for the file",
        },
        {
            type: "list",
            name: 'shape',
            message: 'Select desired shape',
            choices: ["Circle", "Triangle", "Square"]
        },
        {
            type: "input",
            name: 'fillColor',
            message: "Enter shape inside colour"
        },
        {
            type: 'input',
            name: 'borderColor',
            message: 'Enter shape border color',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter desired text color'
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter upto 3 characters to be displayed'
        }
    ])

.then((res) => {
    switch(res.shape){
        case "Circle":
            var circle = new Circle(res.fillColor, res.borderColor, res.textColor, res.text);
            writeHtml(circle, res.logoName);
            break;
        case "Square":
            var square = new Square(res.fillColor, res.borderColor, res.textColor, res.text);
            writeHtml(square, res.logoName);
            break;
        case "Triangle":
            var triangle = new Triangle(res.fillColor, res.borderColor, res.textColor, res.text);
            writeHtml(triangle, res.logoName);
            break;
        default :
            console.log("Error");
        }
    })
}

function writeHtml(shape, logoName){
    fs.writeFile("./examples/" + logoName + ".svg", shape.renderShape(), (error) => {
        error ? console.log(error) : console.log("Success");
    })
}

ask();
