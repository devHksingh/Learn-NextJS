import Banner from "@/app/(home)/components/Banner";
import Image from "next/image";
import BookList from "./components/BookList";

export default async function Home() {

  // data fetching

  const response = await fetch(`${process.env.BACKEND_URL}/books`, { cache: 'no-store' })

  if(!response.ok){
    throw new Error('An error occured while fetching the book')
  }

  const books = await response.json()
  // console.log(books.book);
  // console.log(typeof(books.book));
  
  

  return (
    
    <>
    <Banner />
    <BookList books={books.book} />
    </>
  );
}
