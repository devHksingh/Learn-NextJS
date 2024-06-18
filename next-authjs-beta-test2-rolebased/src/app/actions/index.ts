'use server'

import { signIn,signOut } from "@/auth";

export async function doSocialLogin(formData:FormData){
    const action = formData.get('action')
    console.log("Action => index.ts : action",action);
    if(action && typeof(action)==="string"){
        await signIn(action,{redirectTo:'/Blog'})
    }
    
}

export async function doLogout (){
    await signOut({redirectTo:'/login'})
}