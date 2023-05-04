import PropTypes from 'prop-types';
import Book from './Book';

const Booklist = ({ books }) => (
  <div className="book-list">
    <ul>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
        // <p>Book</p>
      ))}
    </ul>
  </div>
);
export default Booklist;
Booklist.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func.isRequired,
    }),
  ).isRequired,
};
