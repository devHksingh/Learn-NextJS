'use client'
import { useAppDispatch } from '@/lib/hook'
import { addProduct } from '@/lib/store/features/cart/cartSlice'
import { Product } from '@/types/productTypes'

interface ProductCardProps {
    product: Product
}

const ProductCard = ({product}:ProductCardProps) => {
  const dispatch = useAppDispatch()
  const handleAddToCart =(id:number)=>{
    console.log('adding to cart productId',id);
    dispatch(addProduct({productId:id,quantity:1}))
  }
  return (
    <div className='p-2 '>
        <h1>{product.title}</h1>
        <p>{product.brand}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        {/* TODO Make btn client comp */}
        <button className='border px-2 py-1 '
        onClick={()=>handleAddToCart(product.id)}
        >Add to cart</button>
    </div>
  )
}

export default ProductCard