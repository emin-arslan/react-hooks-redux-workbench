import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.quantity}
              <Badge
                onClick={(e) => {
                  e.stopPropagation();
                  this.props.removeFromCart(cartItem);
                }}
                color="danger"
              >
                {cartItem.quantity > 1 ? "-" : "x"}
              </Badge>
              {cartItem.product.body}{" "}
              <Badge color="success"> {cartItem.quantity}</Badge>{" "}
            </DropdownItem>
            
          ))}
          <hr/>
          <DropdownItem>
              <Link to="cart">Go to cart</Link>
             
              </DropdownItem>
              <hr/>
              <DropdownItem>
              <Link to="Form1">Go to Form</Link>
               </DropdownItem>
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
