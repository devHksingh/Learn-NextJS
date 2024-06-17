import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import credentialProvider from "next-auth/providers/credentials"
import User from "@/model/User"
import bcrypt from "bcryptjs"
import dbConnect from "./lib/mongoDB-connection";

export const {handlers,signIn,signOut,auth} = NextAuth({
    ...authConfig,
    providers:[
        credentialProvider({
            credentials:{
                username:{},
                email:{},
                password:{}
            },
            async authorize(credentials){
                let user = null
                await dbConnect()
                try {
                    user = await User.findOne({
                        $or:[
                            {email:credentials.email},
                            {username:credentials.username}
                        ]
                    })
                    if(!user){
                        throw new Error("User not found")
                    }
                    if(!user.isVerified){
                        throw new Error("Kindly verify your account before login")
                    }
                    
                    const isPasswordCorrect =  bcrypt.compare(credentials.password as string,user.password )

                    if(!isPasswordCorrect){
                        throw new Error("Check your credentials")
                    }else{
                        return user
                    }
                    

                } catch (error) {
                    throw new Error("DB error code 500 ");
                }
                
            }
        })
    ]
})
