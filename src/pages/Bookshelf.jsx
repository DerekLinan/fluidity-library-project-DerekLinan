import BookCard from '../blocks/BookCard';
import '../styles/bookshelf.scss';

const Bookshelf = () => {
  return (
    <>
      <main className="main">
        <h1 className="section__header">Release the Kraken of Knowledge!</h1>
        <section className="bookshelf-section">
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
        </section>
      </main>
    </>
  );
};

export default Bookshelf;
