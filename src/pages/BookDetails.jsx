import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { loadBook, deleteBook } from '../scripts/Utils';
import StarRating from '../blocks/StarRating';
import '../styles/book-details.scss';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    loadBook(id)
      .then(({ data: bookData }) => {
        setBook(bookData);
      })
      .catch((e) => {
        throw new Error(e);
      });
  }, []);

  const { title, image, author, rating, synopsis, pages, published } = book;

  const history = useHistory();

  const removeBook = () => {
    deleteBook(id)
      .then(history.push('/bookshelf'))
      .catch((e) => {
        throw new Error(e);
      });
  };

  return (
    <main className="main">
      <section className="section">
        <div className="book-details">
          <div className="book-card">
            <img
              className="book-card__img"
              crossOrigin="anonymous"
              src={image}
              alt={`${title}'s cover`}
            />
            <div className="label-before">
              <StarRating rating={rating} />
            </div>
          </div>
          <div className="book-details__info">
            <h1 className="section__header">{title}</h1>
            <h2 className="section__h2">{author}</h2>
            <h3 className="section__h3">Published: {published}</h3>
            <h3 className="section__h3">{pages} pages</h3>
            <p className="section__text">{synopsis}</p>
          </div>
        </div>
        <div className="button-group">
          <button
            onClick={() => history.push(`/edit-book/${id}`)}
            className="button"
            type="button"
          >
            Edit This Book
          </button>
          <button
            onClick={() => history.push('/bookshelf')}
            className="button button--secondary-color"
            type="button"
          >
            Back to Shelf
          </button>
          <button
            onClick={() => removeBook()}
            className="button button--danger-color"
            type="button"
          >
            Delete Book
          </button>
        </div>
      </section>
    </main>
  );
};

export default BookDetails;
