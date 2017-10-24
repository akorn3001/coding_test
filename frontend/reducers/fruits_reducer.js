import { RECEIVE_ALL_FRUITS, RECEIVE_SINGLE_FRUIT } from '../actions/fruits_actions';

const FruitsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_FRUITS:
      return action.fruits;
    case RECEIVE_SINGLE_FRUIT:
      return action.fruit;
    default:
      return state;
  }
};

export default FruitsReducer;
