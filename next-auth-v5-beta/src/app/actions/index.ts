'use server'
import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData:FormData){
   const action =  formData.get('action')
   await signIn(action as string,{redirectTo:"/home"})
   console.log(action);
   
}
export async function doLogout(){
   await signOut({redirectTo:"/"})
}

export async function doCredentialLogin(formData:FormData){
   try {
      const response = await signIn("credentials",{
         email:formData.get('email'),
         password:formData.get('password'),
         redirect:false
      })
      return response
   } catch (error) {
      throw new Error("Error")
   }
}