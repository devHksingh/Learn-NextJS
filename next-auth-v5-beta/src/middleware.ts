import { NextRequest, NextResponse } from "next/server";
// import {auth} from "./auth"
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";

const {auth} = NextAuth(authConfig)

export default async function middleware(request:NextRequest){
    console.log("middleware");
    console.log("request.url",request.url);
    
    const session = await auth()
    console.log("session :",session );
    

    return NextResponse.redirect(new URL("/",request.url))
}


export const config ={
    matcher:[
        // "/products",
        // "/dashboard",
        "/api/:path*"
        
    ]
}