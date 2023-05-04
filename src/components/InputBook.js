const InputBook = () => (
  <div className="input-book-div">
    <form className="input-book-form">
      <label htmlFor="test">
        <h2>ADD NEW BOOK</h2>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
      </label>
    </form>
    <button className="add-book-btn" type="submit">ADD BOOK</button>
  </div>
);

export default InputBook;
