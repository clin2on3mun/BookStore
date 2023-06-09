import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ title, category, author }) => (
  <li>
    <p>
      {title}
    </p>
    <p>{author}</p>
    <p>{category}</p>
    <button type="button">delete</button>

  </li>
);
Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};
Book.defaultProps = {
  title: null,
  author: null,
  category: null,
};

export default Book;
