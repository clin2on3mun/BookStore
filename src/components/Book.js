import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeBook } from '../redux/book/booksSlice';

const Book = ({
  id, title, category, author,
}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <p id={id}>
        {title}
      </p>
      <p>{author}</p>
      <p>{category}</p>
      <Button title="delete" clickHandler={() => dispatch(removeBook(id))} />
    </li>
  );
};
Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.string,
};
Book.defaultProps = {
  title: null,
  author: null,
  category: null,
  id: null,
};

export default Book;
