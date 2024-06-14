const products = [
    {
      id: "1",
      image: "⌚",
      name: "Watch",
      details: "Buy is for 156 INR"
    },
    {
      id: "2",
      image: "📱",
      name: "Mobile",
      details: "25K INR"
    },
    {
      id: "3",
      image: "🖥️",
      name: "PC",
      details: "86K INR"
    },
    {
      id: "4",
      image: "🖱️",
      name: "Mouse",
      details: "6K INR"
    },
    {
      id: "5",
      image: "🖨️",
      name: "Printer",
      details: "8K INR"
    },
    {
      id: "6",
      image: "⌨️",
      name: "Keyboard",
      details: "4K INR"
    },
    {
      id: "7",
      image: "📒",
      name: "Notebook",
      details: "40 INR"
    },
    {
      id: "8",
      image: "🖊️",
      name: "Pen",
      details: "20 INR"
    },
    {
      id: "9",
      image: "🗄️",
      name: "File Cabinet",
      details: "2K INR"
    },
    {
      id: "10",
      image: "💻",
      name: "Laptop",
      details: "23K INR Without EMI"
    }
  ]

export const getAllProducts = ()=>{
    return products
}

export const getProductById = (id:string)=>{
    const product = products.find((product)=>product.id === id)
    return product
}