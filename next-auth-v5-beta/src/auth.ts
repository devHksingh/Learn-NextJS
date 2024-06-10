import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import github from "next-auth/providers/github";
import credentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "./data/users";
import { User } from "./model/user-model";
import bcryptjs from "bcryptjs"

export const {
    handlers:{GET,POST},
    auth,
    signIn,
    signOut,
}=NextAuth({
    session:{
        strategy:'jwt'
    },
    providers:[
        credentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                // if (credentials === null) return null;
                console.log("AUTH JS $$$$$$$$$$$");
                
                console.log("credentials",credentials);
                
                try {
                    // const user = getUserByEmail(credentials?.email as string);
                    const user = await User.findOne({
                        email: credentials?.email
                    })
                    console.log(user);
                    if (user) {
                        // const isMatch = user?.password === credentials.password;
                        const isMatch = await bcryptjs.compare(credentials.password as string, user?.password as string)

                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Email or Password is not correct");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (error) {
                    throw new Error("DB error code 500 ");
                }
            },
        }),
        google({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,

            authorization:{
                params:{
                    prompt:"consent",
                    access_type:"offline",
                    response_type:"code"
                }
            }
        }),
        github({
            clientId:process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET,

            authorization:{
                params:{
                    prompt:"consent",
                    access_type:"offline",
                    response_type:"code"
                }
            }
        }),

    ]
})