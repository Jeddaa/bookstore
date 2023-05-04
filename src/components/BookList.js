import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books }) => (
  <div className="book-list">
    <ul>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
    </ul>
  </div>
);
export default BookList;
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func.isRequired,
    }),
  ).isRequired,
};
