import { NextResponse } from "next/server"



export const GET = ()=>{
    console.log("hi");
    
    return new NextResponse("Hi there testing middleware",{
        status:201
    })
}