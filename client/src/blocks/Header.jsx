import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/header.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const history = useHistory();
  const [searchText, changeSearchText] = useState('');

  const searchForBooks = (e) => {
    e.preventDefault();
    const params = new URLSearchParams('?');
    params.set('search', searchText.toLowerCase().trim());
    if (params.get('search')) {
      return history.push({
        pathname: '/bookshelf',
        search: params.toString(),
      });
    }
    return history.push('/bookshelf');
  };

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
      <form className="searchbar" onSubmit={(e) => searchForBooks(e)}>
        <input
          className="searchbar__input"
          type="text"
          value={searchText}
          onChange={(e) => changeSearchText(e.target.value)}
          placeholder="Search by Title/Author"
        />
        <button type="submit" className="searchbar__button">
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
