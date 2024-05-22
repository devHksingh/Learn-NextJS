import Link from "next/link";



export default function Header(){
    return(
        <header className="">
            <nav className="py-6">
                <ul className="container flex gap-12 items-center justify-center">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/'>About</Link></li>
                    <li><Link href='/'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}