import React from 'react';

class ShoppingCartItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sum: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(fruit) {
    return(event) => {
      event.preventDefault();
      this.props.clearFruit(fruit);
    };
  }

  render() {
    const fruitName = this.props.fruitName;

    const fruit = this.props.fruits.filter(fruitObj => {
      return fruitObj.itemName === fruitName;
    })[0];

    let itemPriceSum = Math.round(fruit.price * this.props.numberInCart * 100) / 100;

    return (
      <div className="cart-item">
        <div className="img-and-price">
          <img src={fruit.imgSrc}/>
          <span>@ ${fruit.price} each = ${itemPriceSum}</span>
        </div>

        <button onClick={this.handleClick(fruit)}>Delete</button>
      </div>
    );
  }
}

export default ShoppingCartItem;
