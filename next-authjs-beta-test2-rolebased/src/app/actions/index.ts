'use server'

import { signIn,signOut } from "@/auth";

export async function doSocialLogin(formData){
    const action = formData.get('action')
    console.log("Action => index.ts : action",action);
    if(action && typeof(action)==="string"){
        await signIn(action,{redirectTo:'/Blog'})
    }
    
}

export async function doLogout (){
    await signOut({redirectTo:'/login'})
}

interface FormData {
    identifier: string;
    password: string;
  }

export async function doCredentialLogin(data:FormData) {
    console.log("formData", data);
  
    try {
      const response = await signIn("credentials", {
        identifier: data.identifier,
        password: data.password,
        redirect: false,
      });
      return response;
    } catch (err) {
     console.log("actions error");
     
      throw err;
    }
  }