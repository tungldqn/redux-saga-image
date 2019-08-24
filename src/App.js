import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './commons/Header';
import ImageGrid from './modules/Image/Grid';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <ImageGrid />
      </Provider>
    );
  }
}

export default App;
