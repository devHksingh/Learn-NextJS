
import { auth } from "@/auth"
import Logout from "@/components/Logout"
import Image from "next/image"
import { redirect } from "next/navigation"


const HomePage = async() => {
    const session = await auth()
    const userName = session?.user?.name
    const userEmail = session?.user?.email
    if(!session?.user) redirect("/")
  return (
    <div className="flex flex-col-reverse items-center m-4 p-8">
        <Logout/>
        
        <h1 className="capitalize">Hi {userName ? userName:userEmail}</h1>
        {session?.user.image && session?.user.name && (
           <Image
           src={session.user.image}
           alt={session.user.name}
           width={72}
           height={72}
           className="rounded-full m-2"
         />
        )}
        
    </div>
  )
}

export default HomePage