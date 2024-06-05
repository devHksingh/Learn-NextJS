'use client'

import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

export default function SigninPage() {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
        <RegisterLink className='bg-sky-800 p-4 rounded-md'>Signup</RegisterLink>
    </div>
  )
}
