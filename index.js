const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

//const pageHTML = generatePage(name, github);

console.log("hello")



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your manager name?'
          },
          {
            type: 'input',
            name: 'id',
            message: 'What is your manager id'
          },
          {
            type: 'input',
            name: 'email',
            message: 'what is your manager email'
          },
          {
            type: 'input',
            name: 'officeNumber',
            message: 'what is your manager office number'
          }
          
          
          
    ]);
  };


const promptProject = portfolioData => {
    portfolioData.projects = [];
  console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)'
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to add an Engineer, add a Intern, or are you finished adding employees?',
      choices: ['Add Engineer', 'Add Intern', 'I am finished adding employees']
      
    }

  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  })

};


                               
  

    
     
  
  
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);








    fs.writeFile('./dist/index.html', pageHTML, err => {
      if (err) throw new Error(err);

     console.log('Page created! Check out index.html in this directory to see it!');
     
    });
  });