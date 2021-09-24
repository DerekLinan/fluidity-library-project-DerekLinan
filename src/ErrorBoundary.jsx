import { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './blocks/Header';
import Footer from './blocks/Footer';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <>
          <Header />
          <p>`An error has occurred /n/n ${error.toString()}`</p>
          <Footer />
        </>
      );
    }

    return children;
  }
}

ErrorBoundary.propsTypes = {
  children: PropTypes.node.isRequired,
};
ErrorBoundary.defaultProps = {
  children: {},
};

export default ErrorBoundary;
