import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import StoreItems from '../../store_items.json';

const configureStore = (preloadedState = { fruits: StoreItems }) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(logger)
  )
);

export default configureStore;
