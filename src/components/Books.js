import BookList from './BookList';
import InputBook from './InputBook';

const Books = () => {
  const books = [
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'the final empire', author: 'brandon sanderson', id: 2 },
    { title: 'the way of kings', author: 'brandon sanderson', id: 3 },
  ];
  return (
    <div>
      <BookList books={books} />
      <InputBook />
    </div>
  );
};

export default Books;
