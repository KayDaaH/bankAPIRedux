const axios = require("axios");
const signupApi = "http://localhost:3001/api/v1/user/signup";
const userSchema = require("../database/models/userModel");
const userModel = require("../database/models/userModel");
const connection = require("../database/connection");
const { Db } = require("mongodb");

const users = [
  {
    firstName: "Tony3",
    lastName: "Stark",
    email: "tony@stark.com",
    password: "password123",
  },
  {
    firstName: "Steve3",
    lastName: "Rogers",
    email: "steve@rogers.com",
    password: "password456",
  },
];

users.forEach(async (user) => {
  connection();
  const newUser = new userModel(user);
  try {
    await newUser.save();
    console.log(`Données enregistrées sur la BDD`);
  } catch (error) {
    console.error(`Erreur lors de l'importation des données : ${error}`);
    throw new Error(error);
  }
});
