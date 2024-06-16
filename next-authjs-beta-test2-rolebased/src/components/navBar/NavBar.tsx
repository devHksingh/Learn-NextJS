"use client"
import { MessageSquareCode } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const NavBar = () => {
    const pathname= usePathname()
    const [active,setActive] = useState(false)
    const activeClassName = `border-lime-400 border-b-2 pb-2`
  return (
    <header className='border flex justify-between items-center p-4 bg-slate-900'>
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
        <nav className='space-x-4'>
            <Button><Link href={"#"}>Login</Link></Button>
            <Button ><Link href={"#"}>Register</Link></Button>
            <ul>

            </ul>
        </nav>
    </header>
  )
}

export default NavBar