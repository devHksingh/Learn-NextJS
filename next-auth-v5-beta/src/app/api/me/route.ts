import { NextResponse } from "next/server"
import {auth} from "@/auth"
import { getUserByEmail } from "@/queries/users";
import { dbConnect } from "@/lib/mongo";



export const GET = async ()=>{
    const session = await auth()
    if(!session?.user){
        return new NextResponse("You are not authenticated",{
            status:401
        })
    }
    const userEmailId = session?.user?.email
    await dbConnect()
    try {
        if(userEmailId){
            const user = await getUserByEmail(userEmailId) 
            return new NextResponse(JSON.stringify(user), {
            status: 200,
            });
        }
        
    } catch (error) {
        return new NextResponse("Server error",{
            status:500
        })
    }
    console.log("hi");
    
    return new NextResponse("Hi there testing middleware",{
        status:201
    })
}