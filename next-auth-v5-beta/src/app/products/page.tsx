import { getAllProducts } from "@/data/products"
import Link from "next/link";


const  ProductListPage = () => {
    const listOfAllProducts = getAllProducts()
    // console.log(listOfAllProducts);
    
  return (
    <div className=""> 
        <h1 className="text-center text-4xl mt-2">ProductListPage</h1>
        <div className="grid  grid-cols-3 place-content-evenly p-8 gap-6">
            
            {
                listOfAllProducts.map((product)=>(
                    <Link key={product.id} href={`/products/${product.id}`} className="text-center cursor-pointer hover:bg-sky-600 grid place-content-center border rounded-xl p-6 ">
                        <div>
                            
                            <span className=" text-6xl mb-2">{product.image}</span>
                            <h2 className=" text-2xl text-gray-600 mt-2 hover:text-gray-100">{product.name}</h2>
                            <p className="text-lg">{product.details}</p>
                            
                        </div>
                    </Link>
                ))
            }
        </div>
        
    </div>
  )
}

export default  ProductListPage