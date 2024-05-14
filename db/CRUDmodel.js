const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    Title : {
        type : String
    },
    Body : {
        type : String
    },
    Created_By : {
        type : String
    },
    Status : {
        type : String
    },
    Location : {
        type : String

    }
});

const CrudModel = new mongoose.model("CrudModel", Schema);

module.exports = CrudModel;