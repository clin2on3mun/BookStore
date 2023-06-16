import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBook } from '../redux/book/booksSlice';

const BookList = () => {
  const { books, isLoading, error } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getBook()); }, []);
  if (isLoading) {
    return (
      <>
        <h1>is loading</h1>
      </>
    );
  }
  if (error) {
    <h1>something went work</h1>;
  }

  return (
    <ul className="books">
      {books.map((book) => (
        <Book
          key={book.item_id}
          author={book.author}
          title={book.title}
          category={book.category}
          id={book.item_id}
        />
      ))}
    </ul>

  );
};

export default BookList;
