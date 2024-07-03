"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { Switch } from "@/components/ui/switch"
import { Button } from './ui/button'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const Nav_Bar = () => {
    const [darkTheme,setDarkTheme] = useState(true)
    const {setTheme,theme} = useTheme()
    console.log("CURRENT THEME outside:",theme);
    function setUserTheme(){
        if(darkTheme){
            
            setDarkTheme(false)
            setTheme("light")
            console.log("LIGHT");
            console.log("CURRENT THEME :",theme);
            
            console.log("darkTheme",darkTheme);
            
        }else{
            console.log("CURRENT THEME 1:",theme);
            setDarkTheme(true)

            setTheme("dark")
            console.log("DARK");
            console.log("CURRENT THEME 2:",theme);
            console.log("darkTheme",darkTheme);
        }
    }
  return (
    <header className='p-6 mt-2 mb-2'>
        <nav className='flex justify-between items-center gap-6'>
            <div>
                <Link href={'/'}>
                    <Logo/>
                </Link>
            </div>
            <div>
                
                <Button variant="outline" size="icon" onClick={setUserTheme}>

                    {
                        darkTheme ? <Moon className="" />:
                        <Sun className="" />
                        
                    }
                    
                    <span className="sr-only">Toggle theme</span>
                </Button>
                
            </div>
        </nav>
    </header>
  )
}

export default Nav_Bar

