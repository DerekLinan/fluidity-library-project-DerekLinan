import axios from 'axios';

const local = 'http://localhost:3000/books';

export const loadBooks = () => {
  return axios.get(local);
};

export const loadBook = (id) => {
  return axios.get(`${local}/${id}`);
};

export const addBook = (data) => {
  return axios.post(local, data);
};

export const editBook = (id, data) => {
  return axios.put(`${local}/${id}`, data);
};

export const deleteBook = (id) => {
  return axios.delete(`${local}/${id}`);
};

export const searchBooks = (search) => {
  return axios.get(`${local}/${search}`);
};
