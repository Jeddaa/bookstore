import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBook } from '../redux/books/bookSlice';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <li>
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{category}</p>
        <button type="button" onClick={() => handleDelete(id)}>
          Remove
        </button>
      </div>
    </li>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
