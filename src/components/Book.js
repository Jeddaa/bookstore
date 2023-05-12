import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
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
    <li className="book-card-li">
      <div className="book-card-div">
        <p className="category">{category}</p>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <li className="book-card-btns">
          <button type="button">Comments</button>
          <div className="btn-line" />
          <button type="button" onClick={() => handleDelete(id)}>
            Remove
          </button>
          <div className="btn-line" />
          <button type="button">Edit</button>
        </li>
      </div>
      <div className="book-deets">
        <div className="book-comp-div">
          <AiOutlineLoading3Quarters className="loading-btn" />
          <li className="loading-li">
            <h2>64%</h2>
            <p>completed</p>
          </li>
        </div>
        <div className="book-progress-line" />
        <div className="book-progress-div">
          <p className="curr-chpt">CURRENT CHAPTER</p>
          <p className="chpt-no">Chapter 17</p>
          <button type="button" className="update-prog-btn">UPDATE PROGRESS</button>
        </div>
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
