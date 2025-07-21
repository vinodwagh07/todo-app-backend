require("dotenv").config();
const mongoose = require("mongoose");
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB connected");
    })
    .catch(() => {
      console.log("Erro occured while connecting to database");
    });
};

module.exports = dbConnect;
