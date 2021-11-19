const mongoose = require("mongoose");


const noteSchema = new mongoose.Schema({
    title : {
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        maxlength:10000
    }
});

module.exports=mongoose.model("Note",noteSchema);
