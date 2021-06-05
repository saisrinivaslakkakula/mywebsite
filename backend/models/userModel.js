import mongoose from  'mongoose'
import bcrypt from 'bcryptjs'
const userSchema = mongoose.Schema({
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        isAdmin:{
            type:Boolean,
            required:true,
            default:false
        },
        isEmployee:{
            type:Boolean,
            default:false
        },
        isAuthor:{
            type:String,
            default:'off'
        },
       photoPath:{
            type:String,
            default:null
        }


    },{timestamps:true})

    userSchema.methods.matchPassword = async function(enteredPassword){
        return await bcrypt.compare(enteredPassword,this.password)
    }
    const User = mongoose.model('User',userSchema) 
    export default User
