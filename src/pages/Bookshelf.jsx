import { useState, useEffect } from 'react';
import BookCard from '../blocks/BookCard';
import '../styles/bookshelf.scss';
import { loadBooks } from '../scripts/Utils';

const Bookshelf = () => {
  const [bookList, setBooks] = useState([]);

  useEffect(() => {
    loadBooks()
      .then(({ data: books }) => {
        setBooks(books);
      })
      .catch((e) => {
        throw new Error(e);
      });
  }, []);

  return (
    <>
      <main className="main">
        <section className="section">
          <h1 className="section__header">Release the Kraken of Knowledge!</h1>
          <div className="bookshelf-section">
            <div className="bookshelf">
              {bookList.map(({ id, title, image, author, synopsis }) => (
                <BookCard
                  id={id}
                  author={author.trim()}
                  title={title.trim()}
                  image={image}
                  synopsis={synopsis}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Bookshelf;
