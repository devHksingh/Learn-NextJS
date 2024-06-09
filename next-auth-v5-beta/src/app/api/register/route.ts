import { NextRequest } from "next/server";



export const POST = async(request:NextRequest)=>{
    const {name,email,password} = await request.json()
    console.log(name,email,password);
    
    //create a db connection

    // Encrypt the password

    // Form a DB payload

    // Update the DB
}