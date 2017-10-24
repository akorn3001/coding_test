import { connect } from 'react-redux';
import FruitsIndexItem from './fruits_index_item';
import { addFruitToCart } from '../../actions/fruits_actions';

const mapStateToProps = (state, ownProps) => {
  return { numberInCart: state.cart[ownProps.fruit.itemName] };
};

const mapDispatchToProps = dispatch => {
  return { addFruitToCart: (fruit) => dispatch(addFruitToCart(fruit)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitsIndexItem);
