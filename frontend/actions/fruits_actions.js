export const RECEIVE_ALL_FRUITS = "RECEIVE_ALL_FRUITS";
export const RECEIVE_SINGLE_FRUIT = "RECEIVE_SINGLE_FRUIT";
export const ADD_FRUIT_TO_CART = "ADD_FRUIT_TO_CART";
export const CLEAR_FRUIT = "CLEAR_FRUIT";
export const CLEAR_ALL_FRUITS = "CLEAR_ALL_FRUITS";


export const receiveAllFruits = fruits => {
  return {
    type: RECEIVE_ALL_FRUITS,
    fruits
  };
};

export const receiveSingleFruit = fruit => {
  return {
    type: RECEIVE_SINGLE_FRUIT,
    fruit
  };
};

export const addFruitToCart = fruit => {
  return {
    type: ADD_FRUIT_TO_CART,
    fruit
  };
};

export const clearFruit = fruit => {
  return {
    type: CLEAR_FRUIT,
    fruit
  };
};

export const clearAllFruits = () => {
  return {
    type: CLEAR_ALL_FRUITS
  };
};
