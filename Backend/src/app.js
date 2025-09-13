const mongoose=require("mongoose");
const express=require("express");
const app=express();

app.use(express.json());

async function connectDB(){
    try{
   mongoose.connect("mongodb+srv://shubh:Shubham388450@cluster0.kqqa2.mongodb.net/shikshaplay");
   console.log("database connected successfully");
   
    } catch(error){
        console.error("Error connecting to the database",error);
        
    }
}
connectDB();

app.use("/",require("./routes/auth.js"));

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
