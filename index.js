const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateSite = require('./src/generateSite');
const fs = require("fs");
const path = require("path");
const pageDir = path.resolve(__dirname, "dist");
const pagePath = path.join(pageDir, "index.html");
const teamMembers = [];

const promptStartup = () => {
  return inquirer
    .prompt([
      {
        // name question
        type: "input",
        name: "name",
        message: "What is your name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name");
            return false;
          }
        },
      },

      {
        // employee id question
        type: "input",
        name: "id",
        message: "What is your Employee ID? (Required)",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter your Employee ID");
            return false;
          }
        },
      },

      {
        // email question
        type: "input",
        name: "email",
        message: "What is your email? (Required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const employee = new Employee(
        answers.name,
        answers.id,
        answers.email,
      );
      teamMembers.push(employee);
      promptMenu();
    });
};

// ---ask questions for new team member or finish team---
const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Select which option you would like to continue with:",
        choices: ["Add Engineer", "Add Intern", "Add Manager", "Finish building your team"],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.menu) {
        // user wants to add Engineer
        case "Add Engineer":
          promptEngineer();
          break;
        // user wants to add Intern
        case "Add Intern":
          promptIntern();
          break;
        // user wants to add Manager
        case "Add Manager"
          promptManager();
          break;
        // user wants finish building team
        default:
          buildTeam();
      }
    });
};

//! ENGINEER
const promptEngineer = () => {
  console.log("----Add new Engineer----");

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of Engineer?(Required)",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Please enter name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee ID of Engineer?(Required)",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter employee ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the email address of Engineer? (Required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter email address.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the github username of Engineer?(Required)",
        validate: (githubUsername) => {
          if (githubUsername) {
            return true;
          } else {
            console.log("Please enter github username.");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      promptMenu();
    });
};

//! INTERN
const promptIntern = () => {
  console.log("----Add new Intern----");

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of Intern?(Required)",
        validate: (internName) => {
          if (internName) {
            return true;
          } else {
            console.log("Please enter name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee ID of Intern?(Required)",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please enter the employee ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the email address of Intern? (Required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter email address.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is the school name of Intern?(Required)",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Please enter school name.");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      promptMenu();
    });
};
//! MANAGER
const promptManager = () => {
    console.log("----Add new Manager----");
  
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of Manager?(Required)",
          validate: (name) => {
            if (name) {
              return true;
            } else {
              console.log("Please enter name.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the employee ID of Manager?(Required)",
          validate: (id) => {
            if (id) {
              return true;
            } else {
              console.log("Please enter the employee ID.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the email address of Manager? (Required)",
          validate: (email) => {
            if (email) {
              return true;
            } else {
              console.log("Please enter email address.");
              return false;
            }
          },
        },
        {
            // office number question
            type: "input",
            name: "officeNumber",
            message: "What is your office number? (Required)",
            validate: (officeNumber) => {
              if (officeNumber) {
                return true;
              } else {
                console.log("Please enter office number.");
                return false;
              }
            },
          },        
      ])
      .then((answers) => {
        console.log(answers);
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        teamMembers.push(manager);
        promptMenu();
      });
  };


const buildTeam = () => {
  console.log("----Finish building my team----");

  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir);
  }
  fs.writeFileSync(pagePath, generateSite(teamMembers), "utf-8");
};

// runs the first prompts
promptStartup();
