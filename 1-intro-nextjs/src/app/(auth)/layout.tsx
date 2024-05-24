import React from 'react'

export default function lay({children}:{children:React.ReactNode}){
    return (
        <div className=''>
            <h1 className="border-b shadow-2xl  text-center text-orange-400 text-xl py-4">
            20%off for next 3days
            </h1>
            {children}
        </div>
    )
}