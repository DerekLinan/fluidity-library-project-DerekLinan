import '../styles/blocks/book-form.scss';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import { loadBook, deleteBook, addImage, deleteImage } from '../scripts/Utils';
import noCover from '../images/no-cover.png';

const BookForm = ({ callBackFunc }) => {
  const getImageURL = 'http://localhost:8080/api/upload/';
  let prevImageURL = '';

  const imageInput = useRef();
  const history = useHistory();
  const { id } = useParams();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    Author: { first_name: '', last_name: '' },
    image: null,
    synopsis: '',
    published: '',
    pages: 1,
    rating: 0,
  });
  const {
    title,
    author,
    Author: { first_name: fn, last_name: ln },
    image,
    synopsis,
    published,
    pages,
    rating,
  } = bookData;

  const location = useLocation();
  const isEditBook = location.pathname !== '/add-book';

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
          if (data.image) {
            prevImageURL = data.image;
            console.log(`prevImageURL: ${prevImageURL}`);
          }
        })
        .catch((e) => {
          throw new Error(e);
        });
    }
  }, [isEditBook]);

  const handleRequired = (firstName) => {
    const data = {
      ...bookData,
      Author: { first_name: firstName, last_name: '' },
    };
    return callBackFunc(data);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const titleInput = bookData.title.trim();
    const authorInput = author ? bookData.author.trim() : `${fn} ${ln}`;

    if (!(titleInput && authorInput))
      return alert('Must include at least a title and author to add book');

    if (imageInput.current.files.length > 0) {
      addImage(imageInput.current.files[0])
        .then(({ data }) => {
          console.log(data);
          bookData.image = `${getImageURL}${data.id}`;
          if (prevImageURL) {
            deleteImage(prevImageURL)
              .then(handleRequired(authorInput))
              .catch((error) => {
                console.log('error after deletion');
                throw new Error(error);
              });
          } else {
            console.log('no image to delete');
            handleRequired(authorInput);
          }
        })
        .catch((error) => {
          console.log(error);
          throw new Error(error);
        });
    } else {
      console.log('no image files');
      handleRequired(authorInput);
    }
  };

  const imageAdded = (event) => {
    if (event.target.files.length > 0) {
      const src = URL.createObjectURL(event.target.files[0]);
      setBookData((prevData) => ({ ...prevData, image: src }));
    }
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

        <form encType="multipart/form-data" onSubmit={(e) => handleOnSubmit(e)}>
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
              value={author || `${fn} ${ln}`}
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
            <label htmlFor="upload" className="button grid--reposition">
              Add Image
              <input
                ref={imageInput}
                id="upload"
                className="book-cover__input"
                onChange={(e) => imageAdded(e)}
                type="file"
                name="imageFileInput"
                accept="image/*"
              />
            </label>

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
              {isEditBook ? 'Save Changes' : 'Add Book'}
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

BookForm.defaultProps = {
  callBackFunc: undefined,
};

BookForm.propTypes = {
  callBackFunc: PropTypes.func,
};

export default BookForm;
