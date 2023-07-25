const inquirer = require('inquirer');
const fs = require('fs');

// const generateReadme = ({ information, contribution, guidelines, test }) =>
//   `# Title of the Project: ${name}
  
//   ## ${description}`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your Project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description of your Project:',
    },
    // {
    //   type: 'input',
    //   name: 'name',
    //   message: 'What is the name of your Project?',
    // },
    // {
    //   type: 'input',
    //   name: 'name',
    //   message: 'What is the name of your Project?',
    // },
    // {
    //   type: 'input',
    //   name: 'name',
    //   message: 'What is the name of your Project?',
    // },
    // {
    //   type: 'input',
    //   name: 'name',
    //   message: 'What is the name of your Project?',
    // },


    // {
    //   type: 'confirm',
    //   message: 'Select what informations will your Project provide?',
    //   name: 'information',
    //   choices: ['DESCRIPTION', 'INSTALLATION', 'USAGE', 'CONTRIBUTING', 'TESTS'],
    // },
    // {
    //   type: 'list',
    //   message: 'Choose one license of the list below?',
    //   name: 'license',
    //   choices: ['ISC', 'MIT', 'Mozilla Public License 2.0', 'Microsoft Public License'],
    // },
  ])
.then((data) => {
  const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

  // fs.writeFile('README.md', process.argv[2], (err) =>
  // err ? console.error(err) : console.log('Commit Logged!')
  // );

  // fs.writeFile('README.md', `${process.argv[2]}\n`, (err) =>
  // err ? console.error(err) : console.log('Commit Logged!')
  // );
  fs.writeFile(text.md, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});
