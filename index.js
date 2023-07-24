const inquirer = require('inquirer');
const fs = require('fs');

// fetch()
// .then(Response =>
//     Response.OK ?
//     Response.json() :
//     { message: "Something went wrong"}
//     )

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
      name: 'information',
      choices: ['DESCRIPTION', 'INSTALLATION', 'USAGE', 'CONTRIBUTING', 'TESTS'],
    },
    {
      type: 'list',
      message: 'Choose one license of the list below?',
      name: 'license',
      choices: ['ISC', 'MIT', 'Mozilla Public License 2.0', 'Microsoft Public License'],
    },
  ])
.then((data) => {
  const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});
