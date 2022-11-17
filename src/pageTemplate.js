const fs = require('fs');
const generateHTML = data => {
  
    let employee = ``;
    for (let i = 0; i < data.length; i = i + 1) {
        let extraItem = ``;
        if(data[i].getRole() === 'Role: Manager'){
            extraItem = data[i].portfolioData()
        }
        else if(data[i].getRole() === 'Role: Engineer'){
            extraItem = data[i].portfolioData()
        }
        else if(data[i].getRole() === 'Role: Intern'){
            extraItem = data[i].portfolioData()
        }


        let card = `<div>
            <h2>Name:${data[i].getName()}</h2>
            <h3>${data[i].getRole()}</h3>
            <p>ID:${data[i].getId()}</p>
            <p>Email:<a href="mailto:https://${data[i].getEmail()}">${data[i].getEmail()}</a></p>
            <p>${extraItem}</p>
        </div>`;

        employee += data;

      }
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
    <link rel="stylesheet" href="./assets/style.css">
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand text-center">My Team</span>
        </nav>
        <header class="header">
                <h1 class="text-center text-info">the dream Team</h1>
                <p class="text-center">About our Team!</p>
        </header>
        <div class="container">
            <div class="row">
            
      </div>
     </div>
         
        </body>
        </html>
        `

}

module.exports = generateHTML;