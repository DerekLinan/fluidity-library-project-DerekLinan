import { useHistory, useParams } from 'react-router-dom';
import BookForm from '../blocks/BookForm';
import { editBook } from '../scripts/Utils';

const EditBook = () => {
  const history = useHistory();
  const { id } = useParams();
  const editBookData = (data) => {
    editBook(id, data)
      .then(() => {
        history.push('/bookshelf');
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return <BookForm callBackFunc={(data) => editBookData(data)} />;
};

export default EditBook;
