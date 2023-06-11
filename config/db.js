require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.hty68.mongodb.net/trigan?retryWrites=true&w=majority&ssl=true`, {

      useNewUrlParser: true,

      useUnifiedTopology: true

    });

    console.log("database connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
