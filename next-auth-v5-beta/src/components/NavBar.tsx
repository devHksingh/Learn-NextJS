import { auth } from "@/auth"
import Link from "next/link";
import Image from "next/image";
import { CircleUserRound } from "lucide-react";
import Logout from "./Logout";


const NavBar = async() => {
    const session = await auth()
    const loggedInUser = session?.user
    console.log("loggedInUser",loggedInUser);

    const userName = loggedInUser?.name
    const userAvatar = loggedInUser?.image
    
  return (
    <header className="flex justify-between items-center bg-slate-900 text-white p-4">
        <Link className="text-2xl" href={'/'}>Product App</Link>
        <nav>
            <ul className="flex pt-1">
                {userName ?(
                    <li className="flex items-center">
                        <Link href={'/dashboard'}>
                            {userAvatar ? (
                                <Image 
                                    src={userAvatar}
                                    alt={userName}
                                    width={25}
                                    height={25}
                                    className="rounded-full"
                                />
                            ):(<CircleUserRound/>)}
                        </Link>
                        <span className="mx-1 flex items-center gap-2">| <Logout/></span>
                      
                    </li>
                ):(
                    <>
                          <li className="mx-2">
                              <Link href="/login">Login</Link>
                          </li>
                          <li className="mx-2">
                              <Link href="/register">Register</Link>
                          </li>
                      </>
                )}
            </ul>
        </nav>
    </header>
  )
}

export default NavBar