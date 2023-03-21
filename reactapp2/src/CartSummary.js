import React, { Component } from "react";
export default class CartSummary extends Component {
  renderEmptyCart()
  {
    return(
        <div>Empty Cart</div>
    )
   
  }
  renderSummary() {
    return (
        <select>
          {this.props.cart.map((cartItem) => (
            <option key={cartItem.product.id}>
              {cartItem.product.body} - {cartItem.quantity}{" "}
            </option>
          ))}
        </select>
    );
  }
  render() {
    return <div>{this.props.cart.length>0 ? this.renderSummary() : this.renderEmptyCart()}</div>;
  }
}
