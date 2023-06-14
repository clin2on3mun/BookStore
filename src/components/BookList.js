import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const { books } = useSelector((store) => store.book);
  return (
    <ul>
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
