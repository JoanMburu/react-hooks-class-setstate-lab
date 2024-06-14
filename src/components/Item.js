import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInCart: false,
    };

    this.handleAddToCartClick = this.handleAddToCartClick.bind(this);
  }

  handleAddToCartClick() {
    this.setState((prevState) => ({
      isInCart: !prevState.isInCart,
    }));
  }

  render() {
    return (
      <li className={this.state.isInCart ? "in-cart" : ""}>
        <span>{this.props.name}</span>
        <span className="category">{this.props.category}</span>
        <button
          className={this.state.isInCart ? "remove" : "add"}
          onClick={this.handleAddToCartClick}
        >
          {this.state.isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}

export default Item;
