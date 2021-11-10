const fs = require('fs')
var html;

var roleHTML = (myEmployees) => {
    myEmployees.forEach(object => {

        var capitolizedName = object.name.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');

        html += `
            <div class="col-sm-4 employee-card">
              <div class="card">
                <div class="card-body">`
        if(object.role === 'Manager') {
            html += `
                  <div class="card-title manager">
                    <h3>${capitolizedName}</h3>
                    <p>${object.role}</p>
                  </div> 
                    <p class="card-text">ID: ${object.id}</p>
                    <p class="card-text">Email: <a class="link" href="mailto:${object.email}" target="_blank">${object.email}</a></p>
                    <p class="card-text">Office #: ${object.office}</p>
                </div>
              </div>
            </div>`
        } else if(object.role === 'Engineer') {
            html += `
                  <div class="card-title engineer">
                    <h3>${capitolizedName}</h3>
                    <p>${object.role}</p>
                  </div> 
                    <p class="card-text">ID: ${object.id}</p>
                    <p class="card-text">Email: <a class="link" href="mailto:${object.email}" target="_blank">${object.email}</a></p>
                    <p class="card-text">Github: <a class="link" href="https://github.com/${object.github}" target="_blank">${object.github}</a></p>
                </div>
              </div>
            </div>`
        } else if(object.role === 'Intern') {
            var capitolizedSchool = object.school.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
            html += `
                  <div class="card-title intern">
                    <h3>${capitolizedName}</h3>
                    <p>${object.role}</p>
                  </div> 
                    <p class="card-text">ID: ${object.id}</p>
                    <p class="card-text">Email: <a class="link" href="mailto:${object.email}" target="_blank">${object.email}</a></p>
                    <p class="card-text">School: ${capitolizedSchool}</p>
                </div>
              </div>
            </div>`
        }
    })
}

var baseHTML = (myEmployees) => {

    html = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="./style/style.css">
        <title>My Team</title>
    </head>

    <body>
        <header class="header-top" id="header-sticky">
          <span class="header-text">my ✩ team</span>
        </header>
        
        <div id="card-containers">
          <div class="row">`;

    roleHTML(myEmployees);

    html += `
          </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script src="./style/style.js" ></script>
    </body>
    </html>`;

    fs.writeFileSync('./dist/index.html', html);
}

module.exports = baseHTML;