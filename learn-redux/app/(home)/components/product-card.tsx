import { Product } from '@/types/productTypes'

interface ProductCardProps {
    product: Product
}

const ProductCard = ({product}:ProductCardProps) => {
  return (
    <div className='p-2 '>
        <h1>{product.title}</h1>
        <p>{product.brand}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button className='border px-2 py-1 '>Add to cart</button>
    </div>
  )
}

export default ProductCard