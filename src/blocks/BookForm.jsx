import '../styles/blocks/book-form.scss';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import { loadBook, deleteBook } from '../scripts/Utils';
import noCover from '../images/no-cover.png';

const BookForm = ({ callBackFunc }) => {
  const history = useHistory();
  const { id } = useParams();
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

  const location = useLocation();
  let isEditBook = false;
  if (location.pathname !== '/add-book') {
    isEditBook = true;
  }

  const dataChanged = (key, event) => {
    if (typeof key === 'string') {
      setBookData((prevData) => ({ ...prevData, [key]: event.target.value }));
    }
  };

  useEffect(() => {
    if (isEditBook) {
      loadBook(id)
        .then(({ data }) => {
          setBookData(data);
        })
        .catch((e) => {
          throw new Error(e);
        });
    }
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const titleInput = bookData.title.trim();
    const authorInput = bookData.author.trim();

    if (!(titleInput && authorInput))
      return alert('Must include at least a title and author to add book');

    return callBackFunc(bookData);
  };

  const removeBook = () => {
    if (isEditBook) {
      deleteBook(id)
        .then(() => history.push('/bookshelf'))
        .catch((e) => {
          throw new Error(e);
        });
    }
  };

  return (
    <main className="main">
      <section className="section">
        <h1 className="section__header">{isEditBook ? 'Edit' : 'Add'} Book</h1>

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
              <img
                className="book-cover__image"
                crossOrigin="anonymous"
                src={image || noCover}
                alt="cover"
              />
              <p className="book-cover__text">{image ? '' : 'Add Image'}</p>
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
              {isEditBook ? 'Edit' : 'Add'} Book
            </button>
            <button
              className="button button--secondary-color"
              type="button"
              onClick={() => history.push('/bookshelf')}
            >
              Cancel
            </button>
            {isEditBook ? (
              <button
                className="button button--danger-color"
                type="button"
                onClick={() => removeBook()}
              >
                Delete Book
              </button>
            ) : (
              <div />
            )}
          </div>
        </form>
      </section>
    </main>
  );
};

export default BookForm;

BookForm.defaultProps = {
  callBackFunc: console.log('No callback'),
};

BookForm.propTypes = {
  callBackFunc: PropTypes.func,
};
