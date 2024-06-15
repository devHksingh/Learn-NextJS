import { getProductById } from "@/data/products"
import Link from "next/link";


const ProductDetailsPage = ({params}:{params:{id:string}}) => {
    const productId = params.id
    const product = getProductById(productId)
    // console.log(product);
    
  return (
    
        
        <div className="flex flex-col justify-center  items-center min-h-screen ">
        <h1 className="mb-6 text-4xl font-semibold text-gray-400">Product Details Page</h1>
            <div className="text-center border p-12 rounded-xl ">
                <span className="text-6xl p-4">{product?.image}</span>
                <h2 className="mt-4 text-2xl font-mono text-gray-400">{product?.name}</h2>
                <p className="mt-2 mb-2 text-lg">{product?.details}</p>
                <Link href={`/products/$${productId}/checkout`}>
                <button className="border rounded-lg px-5 py-2 mt-2 hover:bg-lime-600 hover:text-black hover:border-none">Buy</button>
                </Link>
            </div>
        </div>
    
  )
}

export default ProductDetailsPage