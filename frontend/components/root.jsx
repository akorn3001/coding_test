import React from 'react';
import { Provider } from 'react-redux';

import App from './app';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <span className="fruit-header">Fruit</span>
        <App />
      </div>
    </Provider>
  );
};

export default Root;
