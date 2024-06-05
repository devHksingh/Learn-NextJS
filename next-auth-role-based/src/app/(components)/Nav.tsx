import Link from "next/link"


const Nav = () => {
  return (
    <header className="bg-gray-600 text-slate-200">
        <nav className="flex justify-between items-center w-full px-10 py-4">
            <div>My Site</div>
            <div className="flex gap-10">
                {/*  */}
                <Link href='/'>Home</Link>
                {/* Only for admin */}
                <Link href='/CreateUser'>Create User</Link>
                {/* protected login req & dont have to be admin */}
                <Link href='/ClientMember'>Client Member</Link>
                {/* Render on server, protected login req & dont have to be admin */}
                <Link href='/Member'>Member</Link>
                {/* Public page complete unprotected */}
                <Link href='/Public'>Public</Link> 
                
            </div>
        </nav>
    </header>
  )
}

export default Nav