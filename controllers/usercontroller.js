const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../db/DbModel");
// to registering user
const registeruser = async(req,res) => {
    try{
        const getdat = new userModel({
            Email : req.body.Email,
            Password : req.body.Password
        });
       
        const alrexist = await userModel.findOne({Email : getdat.Email});
        if(alrexist){
            res.status(400).json({
                msg : "user already exist"
            })
        }
        else{
            const hashing = await bcrypt.hash(getdat.Password,10);
            var gentoken = jwt.sign({Email : getdat.Email}, process.env.secretKey);
            console.log(gentoken);
            const newobj = new userModel({
                Email : getdat.Email,
                Password : hashing,
                jwtdata : gentoken
            })
             await newobj.save();
             res.send("Registered successfully!!!")
        }
    }
    catch(e){
        console.log(e);
    }
}

//to login user
const loginuser = async(req,res) => {
    try{
        const  {Email , Password} = req.body;
        const checkMail = await userModel.findOne({Email : Email});
        if(!checkMail){
            res.status(404).json({
                msg : "Oopss! you are not registered, please go to registered"
            })
        }
        else{
            const origiPass = await bcrypt.compare(Password,checkMail.Password);
            if(!origiPass){
                return res.status(400).json({
                    msg : "invalid credential"
                })
            }
            else{
                const token = await jwt.verify(gentoken,process.env.secretKey);
                console.log(token);
                res.redirect("/api/user/crud/operation");
            }
        }
        
    }
    catch(e){
        console.log(e);
    }
}

module.exports = [registeruser,loginuser];