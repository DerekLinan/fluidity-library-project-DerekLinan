import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '../styles/header.scss';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">The Library</h1>

      <FontAwesomeIcon icon={faBars} className="nav-icon" />
      <input type="checkbox" className="nav-button" />

      <nav className="navbar">
        <ul className="navbar__ul">
          <NavLink exact to="/" key="home" className="navbar__li">
            Home
          </NavLink>
          <NavLink to="/bookshelf" key="bookshelf" className="navbar__li">
            Bookshelf
          </NavLink>
          <NavLink to="/add-book" key="addbook" className="navbar__li">
            Add Book
          </NavLink>
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
    </header>
  );
};

export default Header;
