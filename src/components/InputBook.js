import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook, postBook } from '../redux/books/bookSlice';

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !category) setError('Please fill out all fields');
    else {
      dispatch(
        postBook({
          item_id: crypto.randomUUID(),
          title,
          author,
          category,
        }),
      );
      dispatch(
        addBook({
          item_id: crypto.randomUUID(),
          title,
          author,
          category,
        }),
      );
      setError('');
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };
  return (
    <>
      <hr className="input-line" />
      <h3 className="input-header"> ADD NEW BOOK</h3>
      <form className="input-form">
        <input type="text" name="title" placeholder="Book title" value={title || ''} onChange={(e) => setTitle(e.target.value)} className="input-title" />
        <input type="text" name="author" placeholder="Author" value={author || ''} onChange={(e) => setAuthor(e.target.value)} className="input-author" />
        <select type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="input-category" required>
          <option value="" placeholder="category">
            Category
          </option>
          <option>Fiction</option>
          <option>Horror</option>
          <option>Romance</option>
          <option>Science</option>
          <option>NonFiction</option>
        </select>
      </form>
      <button type="submit" onClick={handleSubmit} className="input-btn">
        ADD BOOK
      </button>
      <span className="error">{error}</span>
    </>
  );
};

export default InputBook;
