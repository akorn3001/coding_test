// React
import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllFruits } from './frontend/actions/fruits_actions';

// Components
import Root from './frontend/components/root';
import configureStore from './frontend/store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.total = 0;
  window.store = store;
  window.receiveAllFruits = receiveAllFruits;
  ReactDOM.render(<Root store={ store }/>, root);
});
