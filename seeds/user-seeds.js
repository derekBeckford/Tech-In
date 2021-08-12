const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = [
  {
    username: "janblan",
    github: "janblan",
    twitter: "janblan",
    email: "janblan@email.com",
    password: "password1",
  },
  {
    username: "markstark",
    github: "markstark",
    twitter: "markstark",
    email: "markstark@email.com",
    password: "password2",
  },
  {
    username: "moejoe",
    github: "moejoe",
    twitter: "moejoe",
    email: "moejoe@email.com",
    password: "password3",
  },
  {
    username: "glenmen",
    github: "glenmen",
    twitter: "glenmen",
    email: "glenmen@email.com",
    password: "password4",
  },
  {
    username: "hunterbunter",
    github: "hunterbunter",
    twitter: "hunterbunter",
    email: "hunterbunter@email.com",
    password: "password5",
  },
  {
    username: "sojornmojorn",
    github: "sojornmojorn",
    twitter: "sojornmojorn",
    email: "sojornmojorn@email.com",
    password: "password6",
  },
  {
    username: "MadHatter",
    github: "MadHatter",
    twitter: "MadHatter",
    email: "MadHatter@email.com",
    password: "password7",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });
module.exports = seedUsers;
