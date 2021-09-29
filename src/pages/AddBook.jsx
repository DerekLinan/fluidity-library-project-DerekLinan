import '../styles/add-book.scss';
import Rating from '../blocks/Rating';

const AddBook = () => {
  return (
    <>
      <main className="main">
        <section className="section">
          <h1 className="section__header">Add Book</h1>

          <div className="layout-block">
            <label className="section__text add-title">Title</label>
            <input
              className="input__field add-title-field"
              type="text"
              autoFocus
            />

            <label className="section__text add-author">Author</label>
            <input className="input__field add-author-field" type="text" />

            <div className="book-cover">
              <img className="book-cover__image" />
              <p className="book-cover__text">Add Image</p>
            </div>
            <button className="button grid--reposition">Add Image</button>

            <label className="section__text add-synopsis">Synopsis</label>
            <textarea
              className="input__area add-synopsis-field"
              type="text"
              rows="16"
            />

            <label className="section__text add-published">Published</label>
            <input type="date" className="input__field add-published-field" />

            <label className="section__text add-pages">Pages</label>
            <input className="input__field add-pages-field" type="number" />

            <label className="section__text add-rating">Rating</label>
            <Rating />
          </div>

          <div className="button-group">
            <button className="button">Add Book</button>
            <button className="button button--secondary-color">Cancel</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default AddBook;
