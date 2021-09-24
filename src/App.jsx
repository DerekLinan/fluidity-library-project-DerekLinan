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
