
const Header = () => {
  return (
    <header>
        <nav className="p-2 flex gap-2">
            <button className="bg-sky-600 px-2 py-1 rounded hover:bg-sky-800 cursor-pointer">Cart </button>
            <p>Total items in cart</p>
        </nav>
    </header>
  )
}

export default Header