import { Switch, Route } from 'react-router-dom';

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
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/add-book" component={AddBook} />
        <Route path="/edit-book/:id" component={EditBook} />
        <Route path="/bookshelf" component={Bookshelf} />
        <Route path="/book-details/:id" component={BookDetails} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
