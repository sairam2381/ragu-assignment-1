const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect("mongodb://host.docker.internal:27017/backend-react")
    // .connect("mongodb://127.0.0.1:27017/backend-react")
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
      console.log("DB Connection Failed");
      console.log(error);
      process.exit(1);
    });
};
