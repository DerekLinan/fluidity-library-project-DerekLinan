import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '../styles/header.scss';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">The Library</h1>

      <FontAwesomeIcon icon={faBars} className="nav-icon" />
      <input type="checkbox" className="nav-button" />

      <nav className="navbar">
        <ul className="navbar__ul">
          <Link to="/" className="navbar__li navbar__li--selected">
            Home
          </Link>
          <Link to="/bookshelf" className="navbar__li">
            Bookshelf
          </Link>
          <Link to="/add-book" className="navbar__li">
            Add Book
          </Link>
        </ul>
      </nav>

      <div className="searchbar">
        <input
          className="searchbar__input"
          type="text"
          placeholder="Search by Title/Author"
        />
        <button type="button" className="searchbar__button">
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
