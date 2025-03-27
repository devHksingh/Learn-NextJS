import { Button } from "@/components/ui/button";

// import Image from "next/image";

interface Product{
  id:string,
  title:string,
  description:string,
  category:string,
  images:[string]
}

export default  async function Home() {
  const data = await fetch('https://dummyjson.com/products',{
    cache:"reload",
    next:{
      revalidate:6
    }
  })
  const productsData = await data.json()
  const products = productsData.products
  // console.log("data",products)
  return (
    <div>
      <h1>Sever side render</h1>
      <Button variant="outline">Button</Button>
      {products && products.map((product:Product)=>(
        <div key={product.id}>
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  );
}
// https://dummyjson.com/products