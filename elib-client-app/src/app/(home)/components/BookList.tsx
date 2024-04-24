import { Book } from '@/types'
import React from 'react'
import BookCard from './BookCard'

const BookList = ({books}:{books:Book[]}) => {
  return (
    <div>
          {books && books.map((book)=>(
            <BookCard key={book._id} book={book}/>
          ))}
    </div>
  )
}

export default BookList

// data fetching
// server components
// client component