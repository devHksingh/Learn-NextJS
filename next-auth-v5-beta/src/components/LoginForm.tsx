'use client'
import { FormEvent } from "react";
// import { doSocialLogin } from "@/app/actions";
import SocialLogin from "./SocialLogin";
import { doCredentialLogin } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter()
  const [error,setError] = useState("")  

  async function handleFormSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault()
    try {
      const formData = new FormData(event.currentTarget)
      const response  = await doCredentialLogin(formData)
      if(response.error){
        setError(response.error.message)
      }else{
        router.push('/home')
      }
    } catch (error) {
      console.log("error");
      setError("Check your credentials")
    }
  }
  return (
    <div className="flex-col border p-6 rounded-lg gap-4 items-center justify-center">
      <h1 className="text-xl">LoginForm</h1>
      <div className="text-rose-400 text-lg">{error}</div>
      <form className="flex flex-col gap-2 mt-6" onSubmit={handleFormSubmit}>
        
          <label className="text-xl font-semibold text-pretty text-gray-400">Email Address:</label>
          <input
          className="border border-gray-400 rounded-lg p-2 text-black font-medium"
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          />
        
        
          <label className="text-xl font-semibold text-pretty text-gray-400">Password:</label>
          <input
          className="border border-gray-400 rounded-lg p-2 text-black font-medium"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          />

          <button
          type="submit"
          className="m-4 rounded-xl py-2 capitalize bg-orange-400 text-black hover:bg-lime-600"
          >
            Credentioal login
          </button>
        
      </form>
      <SocialLogin/>
      <p className="mt-4">Don't you have an account?
        <Link href="register"
         className="ml-2 underline"
        >Register</Link>
      </p>
    </div>
  );
};

export default LoginForm;
