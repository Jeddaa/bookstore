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
    <div>
      <form>
        <label htmlFor="test">
          ADD NEW BOOK
          <input type="text" name="title" placeholder="Book title" value={title || ''} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" name="author" placeholder="Author" value={author || ''} onChange={(e) => setAuthor(e.target.value)} />
          <select type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="" disabled selected>
              select Category
            </option>
            <option>Fiction</option>
            <option>Horror</option>
            <option>Romance</option>
            <option>Science</option>
            <option>NonFiction</option>
          </select>
        </label>
      </form>
      <button type="submit" onClick={handleSubmit}>
        ADD BOOK
      </button>
      <span className="error">{error}</span>
    </div>
  );
};

export default InputBook;
