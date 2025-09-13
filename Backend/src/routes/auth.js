const express= require('express');
const Authrouter=express.Router();
const Student=require("../models/student");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');



Authrouter.post('/signup',async(req,res)=>{
    try{
       const {name,emailId,password,standard}=req.body;
       if(!name || !emailId || !password || !standard){
        return res.status(400).json({message:"All fields are required"});
       }
            if(password.length<6){
                return res.status(400).json({message:"Password must be at least 6 characters long"});
            }
            
         const existingStudent=await Student.findOne({emailId});
         if(existingStudent){
            return res.status(400).json({message:"Student with this email already exists"});
         }
            const student=new Student(req.body);
          const savedstudent=  await student.save();

            const token=await student.getJWT();

            res.cookie("token",token);
           res.status(201).json({message:"Student registered successfully",
             data:savedstudent
           });

    } catch(err){
        console.log("error in signup",err.message);
        res.status(400).send("ERROR : " + err.message);
    }
})

Authrouter.post('/login',async(req,res)=>{
    try{
        const {emailId,password}=req.body;
        if(!emailId || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        const student=await Student.findOne({emailId});
        if(!student){
            return res.status(400).json({message:"Invalid email or password"});
        }
        const isPasswordValid=await bcrypt.compare(password,student.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid email or password"});
        }

        if(isPasswordValid){
            const token=await student.getJWT();

            res.cookie("token",token);
            res.status(200).json({message:"Login successful",
        data:student
        });
        } else{
        throw new Error("Invalid credentials");
      }
    } catch(err){
        res.status(400).send("ERROR : " + err.message);
        console.log("error in login",err.message);
        
    }
})

module.exports=Authrouter;