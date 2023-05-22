const mongoose = require("mongoose");
const databaseUrl ="mongodb://localhost/titi";

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true });
    if (mongoose.connection.readyState === 1) {
      console.log("La base de données a été créée avec succès");
    } else {
      console.log("Erreur lors de la création de la base de données");
    }
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
