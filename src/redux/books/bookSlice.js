import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mDhToq21jUojFpCKNco9/books';
const initialState = {
  books: [],
  isLoading: true,
  isError: undefined,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const resp = await axios.get(url);
    const response = resp.data;
    const books = Object.keys(response).map((key) => ({
      id: key,
      title: response[key][0].title,
      author: response[key][0].author,
      category: response[key][0].category,
      ...response[key][0],
    }));
    return books;
  } catch (error) {
    return error;
  }
});

export const postBook = createAsyncThunk('books/postBooks', async (data) => {
  try {
    const resp = await axios.post(url, data);
    return resp.data;
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk('books/deleteBooks', async (id) => {
  try {
    const resp = await axios.delete(`${url}/${id}`);
    return resp.data;
  } catch (error) {
    return error;
  }
});

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    // postBook
    builder.addCase(postBook.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(postBook.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    // deleteBook;
    builder.addCase(deleteBook.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
