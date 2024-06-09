import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";



export const POST = async(request:NextRequest)=>{
    const {name,email,password} = await request.json()
    console.log(name,email,password);
    
    //create a db connection

    // Encrypt the password

    // Form a DB payload

    // Update the DB

    return NextResponse.json({
        message:"User has been created"
    },{status:201})
}