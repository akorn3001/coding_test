import { ADD_FRUIT_TO_CART, CLEAR_FRUIT, CLEAR_ALL_FRUITS } from '../actions/fruits_actions';

const CartReducer = (state = {}, action) => {
  Object.freeze(state);
  let fruit;
  let newState;

  switch (action.type) {
    case ADD_FRUIT_TO_CART:
      fruit = action.fruit;

      if (state[fruit.itemName]) {
        let newCount = state[fruit.itemName] + 1;
        newState = Object.assign({}, state, { [fruit.itemName]: newCount });
      } else {
        newState = Object.assign({}, state, { [fruit.itemName]: 1});
      }
      return newState;
    case CLEAR_FRUIT:
      const fruitName = action.fruit.itemName;
      newState = Object.assign({}, state);
      delete newState[fruitName];
      return newState;
    case CLEAR_ALL_FRUITS:
      newState = {};
      return newState;
    default:
      return state;
  }
};

export default CartReducer;
