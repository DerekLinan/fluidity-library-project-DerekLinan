import axios from 'axios';

const local = 'http://localhost:3000/books';

export const loadBooks = () => {
  return axios.get(local);
};

export const loadBook = (id) => {
  const target = `${local}/${id}`;
  return axios.get(target);
};

export const addBook = (data) => {
  return axios.post(local, data);
};

export const deleteBook = (id) => {
  const target = `${local}/${id}`;
  return axios.delete(target);
};
