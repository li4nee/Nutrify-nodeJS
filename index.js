const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("./dbmodels/userModel");
const foodModel= require("./dbmodels/foodItems");
const checkToken = require("./Utilities/verifytoken");
const trackingModel = require("./dbmodels/tracking");



//mongoose connect
mongoose
  .connect("mongodb://localhost:27017/nutrify")
  .then(() => {
    console.log("Database Connection Sucessfull.");
  })
  .catch((err) => {
    console.log(err);
  });


//express setup
const app = express();
app.listen(8000, () => {
  console.log("Server up and running.");
});
app.use(express.json());


//register
app.post("/register", async(req, res) => {
  let user = req.body;

  let existingUser = await userModel.findOne({ email: user.email });

  if (!existingUser) 
  {
    bcrypt.genSalt(10, async (err, salt) => {
      if (!err) {
        bcrypt.hash(user.password, salt, async (err, hashpass) => {
          if (!err) {
            user.password = hashpass;
            try
             {
              let userdata = await userModel.create(user);
              res.status(201).send({ Message: "User Created" });
            } catch (err) 
            {
              res.status(400).send({ Message: "Can't create , Check your entry" });
            }
          }
        });
      } 
      else
       {
        res.status(500).send({ Message: "Some error registering, try again later" });
      }
    });
  } 
  else {
    res.status(409).send({Message:"The email is already registered , Please login from this email",});
  }
});



//login endpoint
app.post("/login",async(req,res)=>{

let userLogin = req.body;
try
{
const existingUser = await userModel.findOne({ email: userLogin.email });
if(existingUser!=null)
{

bcrypt.compare(userLogin.password, existingUser.password,(err, result)=>{

    if(result==true)
    {   

        jwt.sign({email: userLogin.email },"li4nee", (err, token)=>{
            if(!err)
            {
                res.send({Message:"Sucessfully Login Done",_token:token});
            }
            else{
                res.status(500).send({Message:"Error assigning token"})
            }
          });

    }
    else{
        res.status(401).send({Message:"Incorrect Password"})
    }
}
)}

else{
    res.status(404).send({"Message":"You are not registered. Please register first"})
}
}
catch(err)
{
    console.log(err);
    res.send({Message:"Some Error"})
}

}
)


 
  // endpoint to see all foods
  app.get("/foods",checkToken,async(req,res)=>{
    try{
      let foods = await foodModel.find();
      res.send(foods);
    }
    catch(err)
    {
      res.status(500).send({"Message":err})
    }
  
  })


  //fetch based on name
app.get("/foods/:name",checkToken,async (req,res)=>{
try{
 let foodData = await foodModel.find({name:{$regex:req.params.name,$options:'i'}});
 //$options:'i' to make it case insensative
 if(foodData!=null)
 {
  res.send(foodData);
 }
 else{
  res.status(404).send({Message:"Food not found"})
 }
}
catch(err){
  res.status(400).send(err);
}
}
)

app.post("/track",async(req,res)=>{
let trackData= req.body;
try{
 let data = await trackingModel.create(trackData);
  res.send({Message:"Tracked"})
}
catch(err)
{
res.status(500).send({Message:err})
}
})