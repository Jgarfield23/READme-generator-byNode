//Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Questions array of objects
const questions = [           
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your Project?'    
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please describe your project.'
            },
            {
                type:'input',
                name: 'instructions',
                message: 'Please explain how to install your project.'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How would one use this application?'
            },
            {
                type: 'input',
                name: 'guidelines',
                message: 'What can be contributed to your Project?'
            },
            {
                type: 'input',
                name: 'test',
                message: 'How do you test your application?'
            },
            {
                type: 'checkbox',
                name: 'licenses',
                message: 'What license does your Project use? No more than 1.',
                choices: ['Apache', 'MIT', 'Boost', 'Mozilla']
            },
            {   
                type: 'input',
                name: 'username',
                message: 'What is your github username?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email address.'
            } 
        ];

const promptUser = () => {
    return inquirer
        .prompt(questions);
};
promptUser()
    .then(answers => {
        let markdown = generateMarkdown(answers);
    writeToFile(markdown);
    });

// TODO: writes the read me file
function writeToFile(markdown) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./utils/README.md', markdown, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
            }
    
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
            ok: true,
            message: 'File created!'
            });
        });
    });
}
