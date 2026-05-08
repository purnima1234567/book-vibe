import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    // ✅ MARK AS READ
    const handleMarkAsRead = (currentBook) => {

        const isExistBook = readList.find(
            (book) => book.bookId === currentBook.bookId
        );

        if (isExistBook) {
            toast.error("The book is already in read list");
            return;
        }

        setReadList([...readList, currentBook]);
        toast.success(`${currentBook.bookName} added to read list`);

        console.log(currentBook, readList, "read list");
    };

    // ✅ WISH LIST
    const handleWishList = (currentBook) => {

        const isExistInReadList = readList.find(
            (book) => book.bookId === currentBook.bookId
        );

        if (isExistInReadList) {
            toast.error("This book is already in read list");
            return;
        }

        const isExistBook = wishList.find(
            (book) => book.bookId === currentBook.bookId
        );

        if (isExistBook) {
            toast.error("The book is already in wish list");
            return;
        }

        setWishList([...wishList, currentBook]);
        toast.success(`${currentBook.bookName} added to wish list`);

        console.log(currentBook, wishList, "wish list");
    };

    const data = {
        readList,
        setReadList,
        wishList,
        setWishList,
        handleMarkAsRead,
        handleWishList
    };

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;