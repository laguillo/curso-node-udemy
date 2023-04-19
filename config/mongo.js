const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DB_URI);
    console.log("**** CONEXION CORRECTA ****");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
