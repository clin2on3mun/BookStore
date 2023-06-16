import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, postBook } from '../redux/book/booksSlice';
import '../styles/form.css';

const InputBook = () => {
  const [data, setData] = useState({ title: '', author: '', category: 'fiction' });
  const { books } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
      item_id: `item${books.length + 1}`,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.title.trim() && data.author.trim()) {
      const bookItem = {
        title: data.title,
        author: data.author,
        category: 'fiction',
        item_id: `item${books.length + 1}`,
      };
      try {
        await dispatch(postBook(bookItem));
        dispatch(addBook(data));
        setData({ title: '', author: '' });
      } catch (error) {
        error(error);
      }
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Book name"
          name="title"
          value={data.title}
          onChange={handleChange}
          id="title"
          className="input"
        />
        <input
          type="text"
          placeholder="author"
          name="author"
          value={data.author}
          onChange={handleChange}
          id="author"
          className="input author"
        />
        <button type="submit" className="big-btn" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default InputBook;
