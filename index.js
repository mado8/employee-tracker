// import classes and html generator js file
const fs = require('fs')
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const createHTML = require('./script/employeeHTML');
var myEmployees = require('./script/employee-array');

// import inquirer
const inquirer = require('inquirer');

// prompts 

const buildTeam = [
    {
      type: 'list',
      name: 'team',
      message: 'Build my ✩ team?',
      choices: ['✩ build a new team! ✩', '✩ continue building team ✩', '✩ no thanks! ✩'],
    },
];

const myTeam = [
      {
        type: 'list',
        name: 'team',
        message: 'Continue building my team?',
        choices: ['✩ continue! ✩', '✩ all finished! ✩'],
      },
];

const chooseRole = [
      {
        type: 'list',
        name: 'role',
        message: 'Choose employee role.',
        choices: ['✩ manager ✩', '✩ engineer ✩', '✩ intern ✩'],
      },
];

const employeeInfo = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter employee\'s name. ',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter employee\'s ID. ',
      },
      {
        type: 'input', 
        name: 'email',
        message: 'Enter employee\'s email. ',
        validate(value) {
            const pass = value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
            if (pass) {
                return true;
            }
            console.log("\x1b[31m", '\n\n Please enter a valid email');
            employeeInfo[2];
        },
      },
];

const managerInfo = [
        employeeInfo[0],
        employeeInfo[1],
        employeeInfo[2],
      {
        type: 'input',
        name: 'office',
        message: 'Enter employee\'s office number. ',
      },
];

const engineerInfo = [
        employeeInfo[0],
        employeeInfo[1],
        employeeInfo[2], 
      {
        type: 'input',
        name: 'github',
        message: 'Enter employee\'s github username. ',
      },
];

const internInfo = [
        employeeInfo[0],
        employeeInfo[1],
        employeeInfo[2],
      {
        type: 'input',
        name: 'school',
        message: 'Enter employee\'s school. ',
      },
];

// prompt function to ask intern info and add info to employee array
function internInfoPrompt() {
    inquirer.prompt(internInfo).then((answers) => {
        // invoke manager class with inputs
        myIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        myEmployees.push(myIntern)
        // prompt myTeam/continue function
        myTeamPrompt();
    }).catch((error) => {
        console.error(error);
    })
};

// prompt function to ask engineer info and add info to employee array
function engineerInfoPrompt() {
    inquirer.prompt(engineerInfo).then((answers) => {
       // invoke manager class with inputs
       myEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
       myEmployees.push(myEngineer);
       // prompt myTeam/continue function
       myTeamPrompt();
    }).catch((error) => {
        console.error(error);
    })
};

// prompt function to ask manager info and add info to employee array
function managerInfoPrompt() {
    inquirer.prompt(managerInfo).then((answers) => {
        // invoke manager class with inputs
        myManager = new Manager(answers.name, answers.id, answers.email, answers.office);
        myEmployees.push(myManager);
        // prompt myTeam/continue function
        myTeamPrompt();
    }).catch((error) => {
        console.error(error);
    })
};

// prompt to ask role of employee
function chooseRolePrompt() {
    inquirer.prompt(chooseRole).then((answers) => {
        if(answers.role === '✩ manager ✩') {
            managerInfoPrompt();
        } else if (answers.role === '✩ engineer ✩') {
            engineerInfoPrompt();
        } else if (answers.role === '✩ intern ✩') {
            internInfoPrompt();
        }
    }).catch((error) => {
        console.error(error);
    })
};

// prompt to continue building team
function myTeamPrompt() {
    inquirer.prompt(myTeam).then((answers) => {
        if(answers.team === '✩ continue! ✩') {
            chooseRolePrompt()
        } else {
            createHTML(myEmployees);
            fs.writeFileSync('./data/employee-data.json', JSON.stringify(myEmployees, null, 4))
            console.log('Your ✩ team has been built! See index.html to view your personalized page.')
            return; 
        }
    }).catch((error) => {
        console.error(error);
    })
};

// prompt to initialize team building prompts when 'node index.js' is executed.
function buildTeamPrompt() {
    inquirer.prompt(buildTeam).then((answers) => {
        if(answers.team === '✩ build a new team! ✩') {
            myEmployees = [];
            fs.writeFile('./data/employee-data.json', '', function(){})
            chooseRolePrompt()
        } else if (answers.team === '✩ continue building team ✩'){
            chooseRolePrompt();
        } else {
            return;
        }
    }).catch((error) => {
        console.error(error);
    })
};

buildTeamPrompt();