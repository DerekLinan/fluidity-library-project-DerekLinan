import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BookCard from '../blocks/BookCard';
import '../styles/bookshelf.scss';
import { loadBooks, searchBooks } from '../scripts/Utils';
import noCover from '../images/no-cover.png';

const Bookshelf = () => {
  const [bookList, setBooks] = useState([]);

  const [searchParams, setSearchParams] = useState('');
  const location = useLocation();
  const param = new URLSearchParams(location.search).get('search');
  if (location.search !== searchParams) {
    setSearchParams(location.search);
  }

  const filterBooks = (unfilteredBooks) => {
    return unfilteredBooks.filter((element) => {
      return (
        element.author.toLowerCase().includes(param) ||
        element.title.toLowerCase().includes(param)
      );
    });
  };

  useEffect(() => {
    if (location.search) {
      searchBooks(location.search)
        .then(({ data: books }) => {
          setBooks(books);
        })
        .catch((e) => {
          throw new Error(e);
        });
    } else {
      loadBooks()
        .then(({ data: books }) => {
          setBooks(books);
        })
        .catch((e) => {
          throw new Error(e);
        });
    }
  }, [searchParams]);

  return (
    <main className="main">
      <section className="section">
        <h1 className="section__header">
          {location.search
            ? `Titles/Authors with '${param}'`
            : 'Release the Kraken of Knowledge!'}
        </h1>
        <div className="bookshelf-section">
          <div className="bookshelf">
            {bookList.map(({ id, title, image, author, Author, synopsis }) => (
              <BookCard
                key={id + title}
                id={id}
                author={author || `${Author.first_name} ${Author.last_name}`}
                title={title}
                image={image || noCover}
                synopsis={synopsis}
              />
            ))}
            {bookList.length < 1 ? (
              <h2 className="section__header">No results found.</h2>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Bookshelf;
