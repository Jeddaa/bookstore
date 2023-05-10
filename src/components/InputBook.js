import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/bookSlice';

const InputBook = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => ({
      ...values, id: crypto.randomUUID(), [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.title || !values.author) return;
    dispatch(addBook(values));
    setValues({});
  };
  return (
    <div>
      <form>
        <label htmlFor="test">
          ADD NEW BOOK
          <input type="text" name="title" placeholder="Book title" value={values.title || ''} onChange={handleChange} />
          <input type="text" name="author" placeholder="Author" value={values.author || ''} onChange={handleChange} />
        </label>
      </form>
      <button type="submit" onClick={handleSubmit}>
        ADD BOOK
      </button>
    </div>
  );
};

export default InputBook;
