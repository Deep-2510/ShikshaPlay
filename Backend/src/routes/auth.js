const express= require('express');
const Authrouter=express.Router();
const Student=require("../models/student");


Authrouter.post('/signup',async(req,res)=>{
    try{
       const {name,emailId,password,standard}=req.body;
       if(!name || !emailId || !password || !standard){
        return res.status(400).json({message:"All fields are required"});
       }
         const existingStudent=await Student.findOne({emailId});
         if(existingStudent){
            return res.status(400).json({message:"Student with this email already exists"});
         }
            const newStudent=new Student({name,emailId,password,standard});
            await newStudent.save();
            res.status(201).json({message:"Student registered successfully"});

    } catch(err){
        console.log("error in signup",err.message);
        res.status(500).json({message:"Internal server error"});
    }
})


module.exports=Authrouter;