import React from 'react';
import FruitsIndexContainer from './fruits_list/fruits_index_container';
import ShoppingCartContainer from './shopping_cart/shopping_cart_container';

const App = () => {
  return (
    <div className="total-app">
      <FruitsIndexContainer />
      <ShoppingCartContainer />
    </div>
  );
};

export default App;
