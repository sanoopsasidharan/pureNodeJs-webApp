const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sanoop:zhND7Ch8o8X3FwxF@cluster0.cwavy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });
