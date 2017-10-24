import { connect } from 'react-redux';
import ShoppingCart from './shopping_cart';
import { clearAllFruits } from '../../actions/fruits_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    fruitsInCart: state.cart,
    fruits: state.fruits
  };
};

const mapDispatchToProps = dispatch => {
  return { clearAllFruits: () => dispatch(clearAllFruits()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
