const mongoose=require("mongoose");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        minlength:3,
        maxLength:25,

    },
    emailId:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        lowercase:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please fill a valid email address"]
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        required:true,
        validate:{
            validator:function(value){
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(value);
        
            }
        }
    },
   standard:{
     type:Number,
     required:true,
     min:1,
    max:12

   },
   
   timestamp:{
    type:Date,
    default:Date.now
   }

})

studentSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    try{
    this.password=await bcrypt.hash(this.password,10);
    next();
    } catch(err){
        console.log("error in hashing password",err.message);
        next(err);
    }
})

studentSchema.methods.getJWT= async function(){
     const student=this;
   const token= await jwt.sign({_id:student._id},"SikshaPlay@786",
    {expiresIn:'1d'});

    return token;
}

module.exports=mongoose.model("Student",studentSchema);