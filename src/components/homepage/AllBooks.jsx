import React, { use } from 'react';
import BookCard from '../ui/BookCard';



const booksPromise = fetch('/booksData.json').then(res => res.json())



const AllBooks = () => {

    const books = use(booksPromise);
    console.log(books, "books");

    return (
        <div className='my-12 container mx-auto'>
            <h2 className='font-bold text-2xl text-center mb-6'>Books</h2>

            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {books.map((book, index) => {
                return (
                    <BookCard key={index} book={book} />
                );
            })}
            </div>

        </div>
    );
};

export default AllBooks;