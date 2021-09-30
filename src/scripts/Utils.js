import axios from 'axios';

const local = 'http://localhost:3000/books';

export const loadBooks = () => {
  console.log(local);
  return axios.get(local);
};

export const loadBook = (id) => {
  return axios.get(id, { params: { id } });
};
