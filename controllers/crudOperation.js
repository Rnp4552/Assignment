const CrudModel = require("../db/CRUDmodel");

//create data 
const createdata = async(req,res) => {
    try{
        const data = new CrudModel({
            Title : req.body.Title,
            Body : req.body.Body,
            Created_By : req.body.Created_By,
            Status : req.body.Status,
            Location : req.body.Location
        });

        await data.save();
    }
    catch(e){
        console.log(e);
    }
}

//update data
const updateData = async(req,res) => {
    const getid = req.params.id;

    try{
        const updatedata = new CrudModel({
            Title : req.body.Title,
            Body : req.body.Body,
            Created_By : req.body.Created_By,
            Status : req.body.Status,
            Location : req.body.Location
        });
        const updateddata = await CrudModel.findByIdAndUpdate(getid, updatedata, { new: true });

        if (!updateddata) {
            return res.status(404).json({ error: 'Document not found' });
        }
        else{
            res.send("Successfully updated")
        }

    }
    catch(e){
        console.log(e);
    }
}

module.exports = [createdata, updateData];