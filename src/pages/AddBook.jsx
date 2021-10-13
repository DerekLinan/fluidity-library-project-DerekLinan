import { useHistory } from 'react-router-dom';
import { addBook } from '../scripts/Utils';
import BookForm from '../blocks/BookForm';

const AddBook = () => {
  const history = useHistory();
  const addBookData = (data) => {
    addBook(data)
      .then(() => {
        history.push('/bookshelf');
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return <BookForm callBackFunc={(data) => addBookData(data)} />;
};

export default AddBook;
