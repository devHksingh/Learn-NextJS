'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LogInPage() {
  const router = useRouter()
  const [user,setUser] = useState({
    email:"",
    password:"",
    
  })

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading,setLoading] = useState(false)

  const onLogin = async () => {
    try {
      console.log('hi');
      
        setLoading(true);
        const response = await axios.post("/api/users/login", user);
        console.log("login success", response.data);
        router.push("/profile");
        
    } catch (error:any) {
        console.log("Signup failed", error.message);
        
        toast.error(error.message);
    }finally {
        setLoading(false);
    }
}


  useEffect(()=>{
    if(user.email.length> 0 && user.password.length> 0){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  },[user])
  
  return (
    <div className='grid h-screen place-content-center gap-6 '>
      <h1>{loading?"Processing":"Login"}</h1>
      <hr/>
      <div className='flex flex-col gap-2'>
        
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
        onClick={onLogin}
        disabled={buttonDisabled}
        className='border py-2 rounded-lg capitalize hover:bg-slate-950 hover:text-lime-600 focus:border-gray-600 focus:outline-none'>
          {buttonDisabled?"No login":"Login"}
        </button>
        <Link href='/signup'>Visit Signup page</Link>
        
      </div>
    </div>
  )
}

 