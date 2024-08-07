import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest,NextResponse} from 'next/server'

// import bcryptjs from 'bcryptjs'
// import { sendEmail } from "@/helpers/mailer";

connect()


export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {token} = reqBody
        console.log(token);

        if(!token){
            return NextResponse.json({message:"Token not found"},{status:400})
        }

        const user= await User.findOne({verifyToken:token,
            verifyTokenExpiry:{$gt:Date.now()}
        }).select("-password")
        console.log('Verify user',user);
        

        if(!user){
            return NextResponse.json({
                message:"invalid token"
            },{status:400})
        }

        console.log(user);
        
        user.isVerified = true
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined

        await user.save()
        
        return NextResponse.json({
            message:"Email verified successfully",
            success:true
        },{status:200})

    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        },{status:500})
    }
}