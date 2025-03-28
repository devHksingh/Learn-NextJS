import { Button } from "@/components/ui/button";
import ProductCard from "./components/product-card";
import { Product } from "@/types/productTypes";

// import Image from "next/image";

export default  async function Home() {
  // const data = await fetch('https://dummyjson.com/products',{
  //   cache:"reload",
  //   next:{
  //     revalidate:6
  //   }
  // })
  // const productsData = await data.json()
  // const products = productsData.products
  // console.log("data",products)
  // fecth product data
  const fetchData = await fetch('https://dummyjson.com/products',{
    next:{
        revalidate:10
    }
})
const data = await fetchData.json()
const products = data.products
  return (
    <>
        <main>
            HomePage
        </main>
        <section>
            {/* call products cards */}
            <div className="grid grid-cols-4 gap-6 p-2 bg-stone-900">
                {products && products.map((product:Product)=>(
                    <div key={product.id} className="border rounded-md">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </section>
    </>
  );
}
// https://dummyjson.com/products

/*
section 
1.most sale products
2.most expensive product
3.user bought order/show similar products [hide if no order place]
section
* product list of
1.colthing
2.electronics
3.Furniture
4.grocery

*/