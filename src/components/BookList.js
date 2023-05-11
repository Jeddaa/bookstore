import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { fetchBooks } from '../redux/books/bookSlice';

const BookList = () => {
  const { books, isLoading, isError } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="book-list">
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Something went wrong...</h1>}
      {books && (
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            category={book.category}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      )}
    </div>
  );
};
export default BookList;
