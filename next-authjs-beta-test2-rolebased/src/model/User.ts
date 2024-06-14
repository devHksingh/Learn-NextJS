import mongoose,{Document, Schema} from "mongoose";

export interface MessageProps extends Document {
    title:string;
    content:string;
    createdAt:Date
}

const MessageSchema:Schema<MessageProps> = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true
    }
},{timestamps:true})

export interface UserProps extends Document{
    userName:string;
    email:string;
    password:string;
    name:string;
    role:string;
    isVerified:boolean;
    verifyCodeExpiry:Date;
    messages:MessageProps[]
}

const UserSchema:Schema<UserProps> = new Schema({
    userName:{
        type:String,
        required:[true,"UserName is required"],
        unique:true,
        match:[/^[a-zA-Z0-9]+$/
    ,'Special characters are not allowed']
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        match:[/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,'Please enter a valid email address']
    },
    password:{
        type:String,
        required:true,
        match:[/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,"Password must have least one digit and one special character."]
    },
    role:{
        type:String,
        required:[true,"User role is required"]
    },
    name:{
        type:String
    },
    isVerified:{
        type:Boolean,
        required:true,

    },
    messages:[MessageSchema]
})


const UserModel = (mongoose.models.User as mongoose.Model<UserProps>) || (mongoose.model<UserProps>("User",UserSchema))

export default UserModel

/*
1.id
2.userName,
3.email,
4.name,
5.role,
6.isVerified,
verifyCodeExpiry:{
        type:Date,
        required:[true,"verify Code Expiry is required"],
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true
    },
    messages: [MessageSchema]

*/