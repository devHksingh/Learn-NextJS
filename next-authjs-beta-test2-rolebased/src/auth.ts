import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import credentialProvider from "next-auth/providers/credentials"
import User from "@/model/User"
import bcrypt from "bcryptjs"
import dbConnect from "./lib/mongoDB-connection";
import { signInSchema } from "./schema/signIn-schema";

export const {handlers,signIn,signOut,auth} = NextAuth({
    ...authConfig,
    providers:[
        credentialProvider({
            credentials:{
                // username:{},
                email:{},
                password:{}
            },
            async authorize(credentials:any):Promise<any>{
                let user = null
                await dbConnect()
                console.log("AUTH.TS => credentials :",credentials);
                
                const {identifier,password} =  signInSchema.parse(credentials)
                try {
                    user = await User.findOne({
                        $or:[
                            {email:credentials.identifier.email},
                            {username:credentials.identifier.username}
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
                    throw new Error("Next auth code 500 ");
                }
                
            }
        })
    ],
    callbacks:{
        async jwt({ token, user }) {
            // When user is set (during login), add additional info to token
            if (user) {
              token.id = user.id;
              token.name = user.name;
              token.email = user.email;
              token.role = user.role;
              token.isVerified = user.isVerified
            }
            return token;
          },
        async session({session,token,user}){
            
                if(user){
                    if(token){
                
                        console.log("CALLBACK Session details: Auth.ts :=>");
                        console.log("session.user.emailVerified ",session.user.emailVerified);
                        console.log("session.user.email:",session.user.email);
                        console.log("session.user.id :",session.user.id);
                        console.log("session.user.image :",session.user.image);
                        console.log("session.user.name :",session.user.name);
                        session.user._id = token._id as string
                        session.user.isVerified = token.isVerified as boolean
                        session.user.role = token.role as string
                        
                    }
                }
                return session
            
        }
    }
})
