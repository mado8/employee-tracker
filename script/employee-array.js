const fs = require('fs');

var appendData = () => {
    const readData = fs.readFileSync('/Users/madelineadonley/bootcamp/homework/week-10/employee-tracker/data/employee-data.json', 'utf-8');
    if(readData.length >= 1) {
        var parsedData = JSON.parse(readData);
        for(var i = 0; i < parsedData.length; i++) {
            myEmployees.push(parsedData[i])
        }
        console.log('\n✩ -- My current team! -- ✩\n');
        console.log(myEmployees, '\n');  
    } 
}

var myEmployees = [];
appendData();

module.exports = myEmployees;