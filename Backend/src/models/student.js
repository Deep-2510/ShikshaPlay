const mongoose=require("mongoose");

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

module.exports=mongoose.model("Student",studentSchema);