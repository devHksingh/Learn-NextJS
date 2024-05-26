import mongoose from 'mongoose'

export interface UserProps extends Document{
    username:string,
    password:string
}

const userSchema = new mongoose.Schema<UserProps>({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

export const User = mongoose.model('User',userSchema)