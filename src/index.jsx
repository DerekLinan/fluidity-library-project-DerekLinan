import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import './styles/index.scss';

render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
