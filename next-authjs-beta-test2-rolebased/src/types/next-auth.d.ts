import 'next-auth'
import { DefaultSession } from 'next-auth';



declare module 'next-auth'{
    interface User{
        _id?:string;
        isVerified:boolean;
        role:string;
    }

    interface Session{
        user:{
            _id?:string;
            isVerified:boolean;
            role:string;
        }& DefaultSession['user']
    }

    interface Jwt{
        _id?:string;
        isVerified:boolean;
        role:string;
    }
}