'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignupPage() {
  const router = useRouter()
  const [user,setUser] = useState({
    email:"",
    password:"",
    username:"",
  })

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading,setLoading] = useState(false)

  const onSignup = async () => {
    try {
      console.log('hi');
      
        setLoading(true);
        const response = await axios.post("/api/users/signup", user);
        console.log("Signup success", response.data);
        router.push("/login");
        
    } catch (error:any) {
        console.log("Signup failed", error.message);
        
        toast.error(error.message);
    }finally {
        setLoading(false);
    }
}


  useEffect(()=>{
    if(user.email.length> 0 && user.password.length> 0 && user.username.length> 0){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  },[user])
  
  return (
    <div className='grid h-screen place-content-center gap-6 '>
      <h1>{loading?"Processing":"SignUp"}</h1>
      <hr/>
      <div className='flex flex-col gap-2'>
        <label htmlFor="username">UserName:</label >
        <input
        type='text'
        id='username'
        value={user.username}
        onChange={(e)=> setUser({...user,username:e.target.value})}
        placeholder='Username'
        className='p-2 rounded-lg border border-gray-400 mb-4 focus:outline-none focus:border-gray-600 text-black'
        />
        <label htmlFor="email">Email:</label >
        <input
        type='email'
        id='email'
        value={user.email}
        onChange={(e)=> setUser({...user,email:e.target.value})}
        placeholder='Email'
        className='p-2 rounded-lg border border-gray-400 mb-4 focus:outline-none focus:border-gray-600 text-black'
        />
        <label htmlFor="password">Password:</label >
        <input
        type='password'
        id='password'
        value={user.password}
        onChange={(e)=> {setUser({...user,password:e.target.value})
        
        
      }}
        placeholder='Password'
        className='p-2 rounded-lg border border-gray-400 mb-4 focus:outline-none focus:border-gray-600 text-black'
        />
        <button 
        onClick={onSignup}
        disabled={buttonDisabled}
        className='border py-2 rounded-lg capitalize hover:bg-slate-950 hover:text-lime-600 focus:border-gray-600 focus:outline-none'>
          {buttonDisabled?"fill the form":"Signup"}
        </button>
        <Link href='/login'>Visit login page</Link>
        
      </div>
    </div>
  )
}

 