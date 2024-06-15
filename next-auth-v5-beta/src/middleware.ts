import { NextRequest, NextResponse } from "next/server";
// import {auth} from "./auth"
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import { PUBLIC_ROUTES,LOGIN,ROOT } from "./lib/routes";

const {auth} = NextAuth(authConfig)

export default async function middleware(request:NextRequest){

    console.log("############$$$$$$$$$middleware");
    console.log("request.url",request.url);
    
    const session = await auth()
    console.log("session :",session );
    
    const {nextUrl} = request

    console.log("nextUrl :" ,nextUrl);
    
    const isAuthenticated = !!session?.user
    console.log("isAuthenticated : ",isAuthenticated);

    console.log("isAuthenticated , nextUrl.pathname",isAuthenticated ,nextUrl.pathname);
    
    const isPublicRoute = (PUBLIC_ROUTES.find(route => nextUrl.pathname.startsWith(route)) || nextUrl.pathname === ROOT)

    console.log("isPublicRoute",isPublicRoute);
    
    if(!isAuthenticated && !isPublicRoute){
        return NextResponse.redirect(new URL(LOGIN,nextUrl))
    }

    // return NextResponse.redirect(new URL("/",request.url))
}


export const config ={
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}