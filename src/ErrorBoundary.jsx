import { Component } from 'react';
import PropTypes from 'prop-types';
import Footer from './blocks/Footer';
import Header from './blocks/Header';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    this.errorMessage = { error, errorInfo };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <>
          <h1>Error has occurred.</h1>
          <Footer />
        </>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
