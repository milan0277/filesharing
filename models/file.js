const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    filename:{type:String , required:true},
    path:{type:String , required:true},
    uuid:{type:String , required:true},
    size:{type:Number , required:true},
    sender:{type:String , required:false},
    receiver:{type:String , required:false},
})

const File = mongoose.model('file',FileSchema)
module.exports = File;