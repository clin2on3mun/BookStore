import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2fM18COFnguiHSKaBmB1/books';

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

export const getBook = createAsyncThunk('getbooks', async () => {
  try {
    const res = await axios.get(url);
    const booksArr = Object.keys(res.data).map((key) => ({
      item_id: key,
      ...res.data[key][0],
    }));
    return booksArr;
  } catch (error) {
    return error;
  }
});
export const deleteBook = createAsyncThunk('deletebooks', async (bookId) => {
  await axios.delete(`${url}/${bookId}`);
  return bookId;
});
export const postBook = createAsyncThunk('postbooks', async (book) => {
  try {
    const data = await axios.post(url, book);
    return data.result;
  } catch (error) {
    return error;
  }
});
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((item) => item.item_id !== bookId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBook.rejected, (state) => {
        state.isLoading = false;
        state.error = 'error';
      });
  },
});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
