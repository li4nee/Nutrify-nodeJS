const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"mandatory"]
    },
    age:{
        type:Number,
        required:[true,"mandatory"],
        min:12
    },
    email:{
        type:String,
        required:[true,"mandatory"]
    },
    password:{
        type:String,
        required:[true,"mandatory"]
    }
},{timestamps:true,collection:"users"})

let userModel = mongoose.model("users",userSchema);

module.exports = userModel;