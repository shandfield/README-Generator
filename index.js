var inquirer = require("inquirer");
var fs= require("fs");
var path= require ("path");


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
            message: "Please give details regarding any additional contribution guidelines:",
            name: "contribution" 
        },
        {//Test Instructions
            type: "input",
            message: "Please give details regarding test instructions:",
            name: "test" 
        },

    ]);
};

    //thoughts behind this: was to take the answers given by the user, and generate the Read Me file from that.. not sure this is correct
function generatereadMe(answers){
    
    return `
${answers.title}

![FS](https://img.shields.io/npm/v/fs)
![inquirer](https://img.shields.io/npm/v/inquirer)
![push](https://img.shields.io/npm/v/push)


Description:
${answers.description}

Table of Contents:
    Installation
    Usage
    Credits
    License


Installation:
${answers.install}


Usage:
${answers.usage}


License:
/github/license/:user/:repo


Contributing:
${answers.contribution} 
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

Tests:
${answers.test}


Questions:
If you have any questions please reach out to me via my GitHub, https://github.com/shandfield.
   `
};

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),data)//writting to my file and first connecting with my file directory adn then connecting to the fileName with the data
}//current working directory .cwd()



//this is based from the promptUser function above where it takes the answers and puts them in my new object, readMe which is based on the generatereadMe function (that is not done yet) and use the answers to generate 
promptUser()
  .then(function(answers) {
    const readMe = generatereadMe(answers);
    //used this from a different example in class, not correct though like the writeFileAsync and I want it to go tot he log.txt file I think that has the value of a readMe.... 
    writeToFile("README.md",readMe);

    })//this is for when it is done correctly it tells the user 
  .then(function() {
    console.log("Successfully wrote to README.md");
  })//if there is an error then it will tell the user 
  .catch(function(err) {
    console.log(err);
  });
  
