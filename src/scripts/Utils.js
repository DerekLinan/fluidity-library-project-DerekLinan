import axios from 'axios';

const local = 'http://localhost:3000/books';

export const loadBooks = () => {
  return axios.get(local);
};

export const loadBook = (id) => {
  const target = `${local}/${id}`;
  return axios.get(target);
};
