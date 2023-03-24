// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// An array of inquirer question object
//inquirer
    //.prompt
   var questions = ([
        {
            type: 'input',
            name:'projectName',
            message: 'What is the name of your project?',    
        },
        {
            type: 'input',
            name:'description',
            message: 'Provide a brief description of your project.',    
        },
        {
            type: 'input',
            name:'usage',
            message: 'Provide instructions and examples of how to use your project.',    
        },
        {
            type: 'input',
            name:'username',
            message: 'What is your GitHub username?',   
        },
        {
            type: 'input',
            name:'instalation',
            message: 'Provide the steps needed to install your project.',    
        },
        {
            type: 'input',
            name:'tests',
            message: 'Provide any tests for your application.',    
        },
        {
            type: 'input',
            name:'license',
            message: 'Choose a license for your project.'
        },       
        {
            type: 'list',
            name:'contact',
            message: 'What is your preferred method of communication?',
            choices: ['email', 'phone', 'telekinesis'],    
        },
])
//.then((data) => {
   // const filename = `${data.name.toLowerCase().split(' ').join(' ')}.json`);
//}
//})



    
    
// TODO: Create a function to write README file
function writeToFile (fileName, data) {


   return fs.writeFile(path.join(process.cwd(),fileName),data)
      

}

// TODO: Create a function to initialize app
//A funtion to take the data from the inquirer and generate a formated readme and recommended to use template literal.
  
    
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("README.md",generateMarkown({ ...answers}))
    })

    
         
   }
    // inquirer.prompt
    // .then => first call the function to format the readme
    // call the write to file function

// Function call to initialize app
init();
// Know requirement from README to create question for line 5
// Use activity 20 and project 28 for guidance and how create question
// Also for line 8 as well write to file function