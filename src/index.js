import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Main from './containers/container';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(      
  <Provider store={store}>
    <Header />
    <Main />
    <Footer />
  </Provider>, document.getElementById('root'));

