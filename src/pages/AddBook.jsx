import '../styles/add-book.scss';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import StarRating from '../blocks/StarRating';
import { addBook } from '../scripts/Utils';

const AddBook = () => {
  const history = useHistory();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    image: '',
    synopsis: '',
    published: '',
    pages: 0,
    rating: 0,
  });

  const { title, author, image, synopsis, published, pages, rating } = bookData;

  const dataChanged = (key, event) => {
    if (typeof key === 'string') {
      setBookData((prevData) => ({ ...prevData, [key]: event.target.value }));
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addBook(bookData)
      .then(() => {
        history.push('/bookshelf');
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <main className="main">
      <section className="section">
        <h1 className="section__header">Add Book</h1>

        <form onSubmit={(e) => handleOnSubmit(e)}>
          <div className="layout-block">
            <p className="section__text add-title">Title</p>
            <input
              className="input__field add-title-field"
              type="text"
              value={title}
              onChange={(e) => dataChanged('title', e)}
              required
              minLength="1"
              maxLength="100"
            />

            <p className="section__text add-author">Author</p>
            <input
              className="input__field add-author-field"
              type="text"
              value={author}
              onChange={(e) => dataChanged('author', e)}
              required
              minLength="1"
              maxLength="100"
            />

            <div className="book-cover">
              <img className="book-cover__image" src={image} alt="cover" />
              <p className="book-cover__text">Add Image</p>
            </div>
            <button className="button grid--reposition" type="button">
              Add Image
            </button>

            <p className="section__text add-synopsis">Synopsis</p>
            <textarea
              className="input__area add-synopsis-field"
              type="text"
              value={synopsis}
              onChange={(e) => dataChanged('synopsis', e)}
              rows="16"
            />

            <p className="section__text add-published">Published</p>
            <input
              type="date"
              value={published}
              onChange={(e) => dataChanged('published', e)}
              className="input__field add-published-field"
            />

            <p className="section__text add-pages">Pages</p>
            <input
              className="input__field add-pages-field"
              type="number"
              value={pages}
              onChange={(e) => dataChanged('pages', e)}
            />

            <p className="section__text add-rating">Rating</p>
            <StarRating
              onChange={(newRating) => dataChanged('rating', newRating)}
              value={rating}
              rating={rating}
            />
          </div>

          <div className="button-group">
            <button className="button" type="submit">
              Add Book
            </button>
            <button className="button button--secondary-color" type="button">
              Cancel
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default AddBook;
