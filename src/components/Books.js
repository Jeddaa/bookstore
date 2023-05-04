// import useState from 'react';
import Booklist from './Booklist';
import Inputbook from './Inputbook';

const Books = () => {
  // eslint-disable-next-line no-unused-vars
  const books = [
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'the final empire', author: 'brandon sanderson', id: 2 },
    { title: 'the way of kings', author: 'brandon sanderson', id: 3 },
  ];
  return (
    <div>
      <Booklist books={books} />
      <Inputbook />
    </div>
  );
};

export default Books;
