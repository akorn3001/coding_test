import React from 'react';

class FruitsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberInCart: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.numberInCart === this.props.fruit.quantityRemaining) {
      alert ("Maximum stock reached for this item!");
    } else this.props.addFruitToCart(this.props.fruit);
    window.total += this.props.fruit.price;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.numberInCart !== this.state.numberInCart) {
      this.setState({ numberInCart: nextProps.numberInCart });
    }
  }

  render() {

    return (
      <div className="fruits-index-item">
        <div>
          <img src={this.props.fruit.imgSrc} />
          <br />
          <span className="item-name">{this.props.fruit.itemName}</span>
        </div>

        <div>
          <span className="item-price">${this.props.fruit.price}</span>
          <span className="item-qty">{this.props.fruit.quantityRemaining} In Stock</span>
          <br />
          <button
            className="add-to-cart"
            type="submit"
            onClick={this.handleClick}>
            Add to Cart
          </button>

        </div>
      </div>
    );
  }
}

export default FruitsIndexItem;
