import cover from '../images/sin-eater.jpeg';
import '../styles/blocks/_book-card.scss';

const BookCard = () => {
  return (
    <div className="book-card book-card--border">
      <img className="book-card__img" src={cover} alt="book cover" />
      <h2 className="book-card__title">Book title goes here</h2>
      <h3 className="book-card__author">Author Name Goes Here</h3>
      <div className="book-card__overlay">
        <p className="overlay__text">More info</p>
      </div>
    </div>
  );
};

export default BookCard;
