import React from 'react'
import Image from 'next/image';
import { Book } from '@/types';

const SingleBookPage = async ({params}:{params :{bookId:string}}) => {
    console.log('params',params)
    let book:Book | null = null
    // fetch single book data
   try {
     const response = await fetch(`${process.env.BACKEND_URL}/books/${params.bookId}`)
     if(!response.ok){
        throw new Error('Error while fetching single book data')
     }
      book = await response.json()
   } catch (error) {
    console.log(error);
    throw new Error('Error while fetching single book data')
    
   }
   
   
   if(!book){
    throw new Error('Book not found')
   }
   console.log(book.author.name?book.author.name:"Alice Johnson");

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
            <div className="col-span-2 pr-16 text-primary-950">
                <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
                <span className="font-semibold">by {book.author.name?book.author.name:"Alice Johnson"}</span>
                <p className="mt-5 text-lg leading-8">{book.description}</p>
                {/* <DownloadButton fileLink={book.file} /> */}
            </div>
            <div className="flex justify-end">
                <Image
                    src={book.coverImage}
                    alt={book.title}
                    className="rounded-md border"
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ width: 'auto', height: 'auto' }}
                />
            </div>
        </div>
  )
}

export default SingleBookPage