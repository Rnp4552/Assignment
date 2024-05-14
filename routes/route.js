const express = require("express");
const route = express.Router();
const [registeruser, loginuser] = require("../controllers/usercontroller");
const [createdata,updateData] = require("../controllers/crudOperation");
const CrudModel = require("../db/CRUDmodel");

// for middleware (for filteration)
route.use(express.json());
route.use(express.urlencoded({extended : true}));

// for homepage
route.get("/", (req,res) => {
    res.send("Homepage")
});

//for registerig user
route.post("/registeruser",registeruser);

//for login user
route.post("/loginuser", loginuser);

//crud page
route.get("/crud/operation", async(req,res) => {
    const getalldata = await CrudModel.find();
    res.render("home", {alldata : getalldata});
});

//create page
route.get("/crud/create", (req,res) => {
    res.render("createdata")
});

//update page
route.get("/crud/update", (req,res) => {
    res.render("updatedata")
});

//create op
route.post("/api/crud/create", createdata);

//update op
route.post("/api/crud/update/:id", updateData);

//delete op
route.post("/api/crud/delete/:id", async(req,res) => {
    const getid = req.params.id;
    await usermodel.findByIdAndDelete(getid);
});


module.exports = route;