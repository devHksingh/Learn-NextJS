// auth.config.js
import {NextAuthConfig} from "next-auth"

export const authConfig:NextAuthConfig = {
    session: {
        strategy: "jwt", // or "database"
    },
    providers:[]
};
