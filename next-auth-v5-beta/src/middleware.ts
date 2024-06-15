import { NextResponse } from "next/server";


export default function middleware(request:NextResponse){
    console.log("middleware");
    console.log("request.url",request.url);
    
    return NextResponse.redirect(new URL("/products/1/checkout",request.url))
}


export const config ={
    matcher:[
        "/products",
        "/dashboard",
        
    ]
}