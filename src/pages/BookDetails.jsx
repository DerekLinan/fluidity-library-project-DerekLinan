import Rating from '../blocks/Rating';
import '../styles/book-details.scss';
import '../styles/blocks/_rating.scss';
import Cover from '../images/sin-eater.jpeg';

const BookDetails = () => {
  return (
    <>
      <main className="main">
        <section className="section">
          <div className="book-details">
            <div className="book-card">
              <img className="book-card__img" src={Cover} alt="book cover" />
              <div className="label-before">
                <Rating />
              </div>
            </div>
            <div className="book-details__info">
              <h1 className="section__header">Watership Down</h1>
              <h2 className="section__h2">Richard Adams</h2>
              <h3 className="section__h3">Published: June 1st, 1975</h3>
              <h3 className="section__h3">475 pages</h3>
              <p className="section__text">
                Set in England`&apos`s Downs, a once idyllic rural landscape,
                this stirring tale of adventure, courage and survival follows a
                band of very special creatures on their flight from the
                intrusions of man and the certain destruction of their home. led
                by a stouthearted pair of friends, they journey forth from their
                native Sandleford Warren through the harrowing trials posed by
                predators and adversaries, to a mysterious promised land and a
                more perfect society.
              </p>
            </div>
          </div>
          <div className="button-group">
            <button className="button" type="button">
              Edit This Book
            </button>
            <button className="button button--secondary-color" type="button">
              Back to Shelf
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default BookDetails;
