import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header';
import Main from './containers/container';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './store';

render(      
  <Provider store={store}>
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  </Provider>, document.getElementById('root'));

