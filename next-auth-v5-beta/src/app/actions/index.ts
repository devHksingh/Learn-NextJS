'use server'
import { signIn } from "@/auth";

export async function doSocialLogin(formData:FormData){
   const action =  formData.get('action')
   await signIn(action as string,{redirectTo:"/home"})
   console.log(action);
   
}
export async function doSocialLogout(){

}