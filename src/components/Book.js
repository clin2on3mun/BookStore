import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { deleteBook, removeBook } from '../redux/book/booksSlice';
import '../styles/bookItem.css';

const Book = ({
  id, title, category, author,
}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div className="book-section">
        <div className="content">
          <div>
            <p className="same-font font-s">{category}</p>
            <p id={id} className="same-font title">
              {title}
            </p>
            <p className="same-font color ">{author}</p>
          </div>
          <div>
            <button type="button" className="same-font color border">Comments</button>
            <Button
              title="Remove"
              clickHandler={() => {
                dispatch(removeBook(id));
                dispatch(deleteBook(id));
              }}
              checkIt="same-font color border p-2"
            />
            <button type="button" className="same-font color none p-2">Edit</button>
          </div>
        </div>
        <div className="progress-tracker">
          <div className="progress-container">
            <div className="progress-circle" />
          </div>
          <div>
            <p className="same-font font-r percentage ">65%</p>
            <p className=" same-font font-r color-nxt">Completed</p>
          </div>
        </div>
        <hr />
        <div className="othercontent">
          <div className="chapter">
            <p className="same-font color-nxt ">CURRENT CHAPTER</p>
            <p className="same-font font-add">CHAPTER_17</p>
          </div>
          <p><button type="button" className="btn">UPDATE PROCESS</button></p>
        </div>
      </div>
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
