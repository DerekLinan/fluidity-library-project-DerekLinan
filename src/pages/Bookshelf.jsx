import BookCard from '../blocks/BookCard';
import '../styles/bookshelf.scss';

const Bookshelf = () => {
  return (
    <>
      <main className="main">
        <section className="section">
          <h1 className="section__header">Release the Kraken of Knowledge!</h1>
          <div className="bookshelf-section">
            <div className="bookshelf">
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Bookshelf;
