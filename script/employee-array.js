const fs = require('fs');
const readData = JSON.parse(fs.readFileSync('/Users/madelineadonley/bootcamp/homework/week-10/employee-tracker/data/employee-data.json', 'utf-8'))

// appends json data as objects to myEmployee array
var appendData = () => {
    if(readData !== '') {
        for(var i=0; i<readData.length; i++) {
            myEmployees.push(readData[i])
        }
    }
}

var myEmployees = [
    
];

appendData();

module.exports = myEmployees;