import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
      </div>
    </li>
  );
};
export default Book;
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
