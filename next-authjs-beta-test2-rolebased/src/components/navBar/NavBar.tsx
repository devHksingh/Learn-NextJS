"use client"
import { MessageSquareCode } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ModeToggle } from '../ModeToggle'


const NavBar = () => {
    const pathname= usePathname()
    const [active,setActive] = useState(false)
    const activeClassName = `border-lime-400 border-b-2 pb-2`
  return (
    <header className='border flex justify-between items-center p-4 dark:bg-slate-900 z-50 shadow-lg'>
        <div className=''>
            <Link href={'/'} className='flex gap-1'><MessageSquareCode/> Message</Link>
        </div>
        <div className='space-x-8 '>
            
            <Link href={"/"} 
            className={`link hover:border-b-2 pb-2 ${pathname === '/' ? `${activeClassName}` : ''}`}
            // className='hover:border-b-2 pb-2 active:border-orange-400 visited:border-lime-400'
            
            >Home</Link>
            <Link href={"/Features"}
            className={`link hover:border-b-2 pb-2 ${pathname === '/Features' ? `${activeClassName}` : ''}`}
            >Features</Link>
            <Link href={"/Blog"}
            className={`link hover:border-b-2 pb-2 ${pathname === '/Blog' ? `${activeClassName}` : ''}`}
            >Blog</Link>
            <Link href={"/about"}
            className={`link hover:border-b-2 pb-2 ${pathname === '/about' ? `${activeClassName}` : ''}`}
            >About</Link>
        </div>
        <nav className='space-x-4 flex '>
            <Button><Link href={"/login"}>Login</Link></Button>
            <Button ><Link href={"/register"}>Register</Link></Button>
            <div className='z-50'>
            <ModeToggle/>
            </div>
            <ul>

            </ul>
        </nav>
    </header>
  )
}

export default NavBar