import { useHistory } from 'react-router-dom';
import Landing from '../blocks/Landing';

const Index = () => {
  const history = useHistory();

  return (
    <>
      <Landing />
      <main className="main">
        <section className="section">
          <h3 className="section__header">Welcome to the Library</h3>
          <p className="section__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            minima, optio facilis maiores doloribus aliquid tempore facere ut
            id, laborum voluptas corporis? Neque pariatur vitae animi ratione
            nostrum voluptate dicta.
          </p>
        </section>

        <button
          onClick={() => history.push('/bookshelf')}
          type="button"
          className="button"
        >
          See Books
        </button>

        <section className="section">
          <p className="section__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            molestias nam animi, quidem aliquam minima amet fugiat ea sunt
            nostrum.
          </p>
        </section>

        <button
          onClick={() => history.push('/add-book')}
          type="button"
          className="button"
        >
          Add a Book
        </button>
      </main>
    </>
  );
};

export default Index;
