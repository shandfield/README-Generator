var inquirer = require("inquirer");
var fs= require("fs");


function promptUser(){
     return inquirer.prompt([
        {//making an open ended question
            type: "input",
            message: "What is your name?",
            name: "name" 
        },
        {//asking for title
            type: "input",
            message: "What is the title of your project?",
            name: "title" 
        },
        {//asking for description 
            type: "input",
            message: "Please give a description of your project:",
            name: "description" 
        },
        {//asking for installation instructions
            type: "input",
            message: "Please give details regarding installation instructions:",
             name: "install" 
        },
        {//Asking for usage information 
            type: "input",
            message: "Please give details regarding usage information:",
            name: "usage" 
        },
        {//Contribution guidelines 
            type: "input",
            message: "Please give details regarding contribution guidelines:",
            name: "contribution" 
        },
        {//Test Instructions
            type: "input",
            message: "Please give details regarding test instructions:",
            name: "test" 
        },
    ]);
};
function generatereadMe(answers){
    return

}

//*pick up from here after a break 
promptUser()
  .then(function(answers) {
    const readMe = generatereadMe(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });
