import React from 'react';
import ShoppingCartItemContainer from './shopping_cart_item_container';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, fruitsInCart: null };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fruitsInCart !== this.state.fruitsInCart) {
      this.setState({ fruitsInCart: nextProps.fruitsInCart });
    }
  }

  handleClick(event) {
    event.preventDefault();
    window.total = 0;
    this.setState({ total: 0 });
    this.props.clearAllFruits();
  }

  render() {
    return (
        <div className="shopping-cart">
          <span>SHOPPING CART</span>
          <span>{Object.values(this.props.fruitsInCart)}</span>

          <ul className="cart-items">
            {
              Object.keys(this.props.fruitsInCart).map((fruitName, idx) =>
              <li key={idx}>{
                <ShoppingCartItemContainer
                numberInCart={this.props.numberInCart}
                fruitName={fruitName}/>
              }</li>)
            }
          </ul>

          <div className="under-cart-list">
            <span>Total: ${Math.round(window.total * 100) / 100}</span>
            <button onClick={this.handleClick}>Confirm Purchase</button>
          </div>
        </div>
    );
  }
}

export default ShoppingCart;
