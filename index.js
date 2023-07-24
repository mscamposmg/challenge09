const inquirer = require('inquirer');
const fs = require('fs');

fetch()
.then(Response =>
    Response.OK ?
    Response.json() :
    { message: "Something went wrong"}
    )

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your Project?',
    },
    {
      type: 'checkbox',
      message: 'Select what informations will your Project provide?',
      name: 'stack',
      choices: ['DESCRIPTION', 'INSTALLATION', 'USAGE', 'CONTRIBUTING', 'TESTS'],
    },
    // {
    //   type: 'list',
    //   message: 'What is your preferred method of communication?',
    //   name: 'contact',
    //   choices: ['email', 'phone', 'telekinesis'],
    // },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
