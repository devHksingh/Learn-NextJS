import { NextRequest, NextResponse } from "next/server";
import { createUser } from "@/queries/users";
import bcryptjs from "bcryptjs"
import {dbConnect} from "@/lib/mongo";


export const POST = async(request:NextRequest)=>{
    const {name,email,password} = await request.json()
    console.log(name,email,password);
    
    //create a db connection
    await dbConnect()
    // Encrypt the password
    const hashedPassword = await bcryptjs.hash(password,10)
    // Form a DB payload
    const newUser = {
        name,
        email,
        password:hashedPassword
    }
    // Update the DB
    try {
        await createUser(newUser)
    } catch (error) {
        return NextResponse.json({
            message:"Unable to create user "
        },{status:500})
        
    }

    return NextResponse.json({
        message:"User has been created"
    },{status:201})
}