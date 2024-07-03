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
    // if(theme === "dark"){
    //     setDarkTheme(true)
    //     setTheme("dark")
    // }else if(theme === "light"){
    //     setTheme("light")
    // }

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
    <header className='p-6 mt-2 '>
        <nav className='flex gap-6'>
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
                {/* <button className='border px-4 rounded-xl'>test</button> */}
            </div>
        </nav>
    </header>
  )
}

export default Nav_Bar
/*
<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
*/

/*
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

*/