'use client'

import { useAppSelector } from "@/lib/hook"

const Header = () => {
  const products = useAppSelector(state=>state.cart)

  console.log("header products",products);
  
  return (
    <header>
        <nav className="p-2 flex gap-2">
            <button className="bg-sky-600 px-2 py-1 rounded hover:bg-sky-800 cursor-pointer">Cart </button>
            {/* client comp */}
            <p>Total items in cart {products.length}</p>
        </nav>
    </header>
  )
}

export default Header