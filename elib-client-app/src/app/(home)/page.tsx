import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default async function Home() {

  // data fetching

  // const response = await fetch(`${process.env.BACKEND_URL}/books`, { cache: 'no-store' })

  // if(!response.ok){
  //   throw new Error('An error occured while fetching the book')
  // }

  // const books = await response.json()
  // console.log(books);
  
  

  return (
    
    <>
    <Banner />
    <Suspense fallback={<Loading/>}>
        <BookList  />
    </Suspense>
    </>
  );
}
