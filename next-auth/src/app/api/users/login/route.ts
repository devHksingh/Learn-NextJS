import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest,NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'
// import { sendEmail } from "@/helpers/mailer";
import jwt from "jsonwebtoken"

connect()


export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json()
        const {email,password} = reqBody

        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({message:"User not found"},
                {status:404}
            )
        }

        console.log("User exists",user);
        
        // compare password

        const isValidPassword = await bcryptjs.compare(password,user.password)

        if(!isValidPassword){
            return NextResponse.json({message:"Check your credentials"},
                {status:400}
            )
        }

        const tokenData = {
            id:user._id
        }

        const token =  jwt.sign(tokenData,process.env.TOKEN_SECRET as string,{expiresIn:'1d'})

        const reponse = NextResponse.json({
            message:"Logged in Success",
            success:true
        })
 

        reponse.cookies.set("token",token,{
            httpOnly:true
        })

        return reponse

    } catch (error:any) {
        return NextResponse.json({error:error.message},
            {status:500}
        )
    }
}