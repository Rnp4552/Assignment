const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/DBDATA").then(() => {
    console.log("Database is conneced successfully!!!");
}).catch((e) => {
    console.log("Database is not connected");
})