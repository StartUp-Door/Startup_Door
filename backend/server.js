const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')
const morgan = require('morgan')
const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv");

const app = express();

//tharaka routes
const RouteTech = require('./src/routes/Serice_Provider/Technician/technician.router');
const RoutePlant = require('./src/routes/Serice_Provider/Plant/plant.router');
const RouteFood = require('./src/routes/Serice_Provider/Food/food.router');

const RouteClient = require('./src/routes/Client/client.router');

  //database

  //midelware
  app.use(express.json())
  app.use(cors());
  app.use(morgan("tiny"));

  //simple route
   app.get('/', (req,res)=>{
       res.json({message:"Welcome to Startup Door"})
   })

  //routes
  app.use("/auth",require("./routes/jwtAuth"))

  //tharaka photo upload
  app.use("/images", express.static(path.join(__dirname, "public/images")));
// app.use("/images", express.static(path.join(__dirname, "public/images/profile")));

const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, "public/images");
  },
  filename:(req, file, cb) => {
    cb(null, req.body.name);
  } 
})
// const storageProfile = multer.diskStorage({
//   destination:(req, file, cb) => {
//     cb(null, "public/images/profile");
//   },
//   filename:(req, file, cb) => {
//     cb(null, req.body.name);
//   } 
// })

const uploadClient = multer({storage});
app.post("/client/upload", uploadClient.single("file"), (req, res) => {
  try{
    return res.status(200).json("File uploaded");
  }
  catch(err){
    console.log(err);
  }
})

const uploadService = multer({storage});
app.post("/service/upload", uploadService.single("file"), (req, res) => {  
  try{
    return res.status(200).json("File uploaded");
  }
  catch(err){
    console.log(err);
  }
})

const uploadProfile = multer({storage}); 
app.post("/client/upload/profile", uploadProfile.single("file"), (req, res) => {  
  try{
    return res.status(200).json("File uploaded");
  }
  catch(err){
    console.log(err);
  }
})

//tharaka routes cinfig
app.use('/service', RouteTech);   
app.use('/service', RoutePlant); 
app.use('/service', RouteFood);

app.use('/client', RouteClient);

  //set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})