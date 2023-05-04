import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <li>
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
  </li>
);
export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
