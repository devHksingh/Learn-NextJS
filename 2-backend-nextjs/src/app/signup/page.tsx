import React from 'react'
import { Signup } from '../components/SignUp'


export default function signIn(){
    return(
        // <section className='h-screen flex justify-center items-center'>
        //     <div className='border flex flex-col gap-4 bg-slate-600 p-8 rounded-lg'>
        //         <input type="text" placeholder='UserName' className='p-2 rounded-lg bg-gray-200 text-slate-300' />
        //         <input type="text" placeholder='Password' className='p-2 rounded-lg bg-gray-200 text-slate-300'/>
        //         <button className='courser-pointer px-1 py-2 rounded-lg text-xl font-semibold text-pretty bg-rose-300 text-black hover:bg-lime-600 focus:ring-4 focus:ring-rose-300'>SignUp</button>
        //     </div>
        // </section>
        <Signup/>
    )
}