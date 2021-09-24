import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AddBook from './pages/AddBook';
import Index from './pages/Index';
import EditBook from './pages/EditBook';
import Bookshelf from './pages/Bookshelf';
import BookDetails from './pages/BookDetails';
import NotFound from './pages/NotFound';

import Header from './blocks/Header';
import Footer from './blocks/Footer';

const App = () => {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum > 1) {
    throw new Error('Big scary error has occurred!');
  }
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/add-book">
            <AddBook />
          </Route>
          <Route path="/edit-book">
            <EditBook />
          </Route>
          <Route path="/bookshelf">
            <Bookshelf />
          </Route>
          <Route path="/book-details">
            <BookDetails />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
