const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    Email : {
        type : String,
        unique : true
    },
    Password : {
        type : String,
        unique : true
    },
    jwtdata : {
        type : String
    }
});


const Model = new mongoose.model("DBModel", Schema);

module.exports = Model;