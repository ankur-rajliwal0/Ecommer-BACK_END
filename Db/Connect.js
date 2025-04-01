const mongoose = require("mongoose");

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.URL).then(() => {
      console.log("app is connected to database sucessfully");
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = ConnectDb;
