import PropTypes from 'prop-types';
import '../styles/blocks/_book-card.scss';

const BookCard = (props) => {
  const { image, title, author, synopsis } = props;
  return (
    <div className="book-card book-card--border">
      <img className="book-card__img" src={image} alt={`${title} cover`} />
      <h2 className="book-card__title">Book title goes here</h2>
      <h3 className="book-card__author">{author}</h3>
      <div className="book-card__overlay">
        <p className="overlay__text">{synopsis}</p>
      </div>
    </div>
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
  title: PropTypes.string,
  author: PropTypes.string,
  synopsis: PropTypes.string,
  image: PropTypes.string,
};
