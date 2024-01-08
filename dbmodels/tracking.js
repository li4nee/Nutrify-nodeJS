const mongoose = require('mongoose');
const trackingSchema= mongoose.Schema({
userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:true
},
foodID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"foods",
    required:true
},
quantity:{
    type:Number,
    required:true
}
},{timestamps:true,collection:"tracking"})
const trackingModel=mongoose.model("tracking",trackingSchema);

module.exports=trackingModel;