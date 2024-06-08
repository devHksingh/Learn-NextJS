
import { auth } from "@/auth"
import Image from "next/image"
import { redirect } from "next/navigation"


const HomePage = async() => {
    const session = await auth()
    if(!session?.user) redirect("/")
  return (
    <div className="flex flex-col-reverse items-center m-4 p-8">
        <h1 className="capitalize"> hi{" "}{session?.user.name}</h1>
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