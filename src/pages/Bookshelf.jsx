import { useState, useEffect } from 'react';
import BookCard from '../blocks/BookCard';
import '../styles/bookshelf.scss';

const [bookList, setBooks] = useState([]);

useEffect(() => {
  // load book data
}, []);

const Bookshelf = () => {
  return (
    <>
      <main className="main">
        <section className="section">
          <h1 className="section__header">Release the Kraken of Knowledge!</h1>
          <div className="bookshelf-section">
            <div className="bookshelf">
              {bookList.map((book) => {
                return <BookCard props={book} />;
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Bookshelf;
