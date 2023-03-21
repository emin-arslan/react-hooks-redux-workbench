import React, { Component } from "react";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
export default class CartSummary extends Component {
  renderEmptyCart() {
    return <div>Empty Cart</div>;
  }
  renderSummary() {
    let a="x";
    return (
    
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu >
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
               
              {cartItem.product.quantity}
              <Badge onClick={()=>this.props.removeFromCart(cartItem)} color="danger">
              {cartItem.quantity>1?a="-":a="x"}
              </Badge>
              {cartItem.product.body}{" "}
              <Badge color="success"> {cartItem.quantity}</Badge>{" "}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
