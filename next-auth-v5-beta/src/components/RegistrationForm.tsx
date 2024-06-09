'use client'
import { FormEvent } from 'react'
import SocialLogin from './SocialLogin'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function RegistrationForm() {
  const router = useRouter()
  async function handleSubmit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const formData = new FormData(event.currentTarget) 
      const name = formData.get('name')
      const email = formData.get('email')
      const password = formData.get('password')

      const response = await fetch('/api/register',{
        method:'POST',
        headers:{
          "content-type":"application/json",
        },
        body:JSON.stringify({
          name,
          email,
          password
        })
      })

      response.status === 201 && router.push('/')
    } catch (error) {
      console.log("error while register user");
      
    }
  }
  return (
    <div className="flex flex-col  p-6 rounded-lg gap-4 items-center justify-center h-screen">
      <h1 className="text-xl">Registration Form</h1>
      {/* <div className="text-rose-400 text-lg">{error}</div> */}
      <form className="flex flex-col gap-2 mt-6" onSubmit={handleSubmit}>
        
          <label className="text-xl font-semibold text-pretty text-gray-400">Username:</label>
          <input
          className="border border-gray-400 rounded-lg p-2 text-black font-medium"
          type="name"
          name="name"
          id="name"
          placeholder="Username"
          />
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
            Register now
          </button>
        
      </form>
      <hr className='text-white w-1/2'/>
      <SocialLogin/>
      <p className="mt-4">Already have an account?
        <Link href="/"
         className="ml-2 underline"
        >Login</Link>
      </p>
    </div>
  )
}

export default RegistrationForm