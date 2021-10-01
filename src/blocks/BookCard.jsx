import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/blocks/_book-card.scss';

const BookCard = ({ id, author, title, synopsis, image }) => {
  return (
    <Link to={`book-details/${id}`}>
      <div className="book-card book-card--border">
        <img
          className="book-card__img"
          crossOrigin="anonymous"
          src={image}
          alt={`${title} cover`}
        />
        <h2 className="book-card__title">{title}</h2>
        <h3 className="book-card__author">{author}</h3>
        <div className="book-card__overlay">
          <p className="overlay__text">{synopsis}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;

BookCard.defaultProps = {
  title: '',
  author: '',
  synopsis: '',
  image: '',
};

BookCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  synopsis: PropTypes.string,
  image: PropTypes.string,
};
