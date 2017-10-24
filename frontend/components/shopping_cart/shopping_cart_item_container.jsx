import { connect } from 'react-redux';
import ShoppingCartItem from './shopping_cart_item';
import { clearFruit } from '../../actions/fruits_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    fruits: state.fruits,
    fruitsByNumber: state.cart,
    numberInCart: state.cart[ownProps.fruitName]
  };
};

const mapDispatchToProps = dispatch => {
  return { clearFruit: (fruit) => dispatch(clearFruit(fruit)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartItem);
