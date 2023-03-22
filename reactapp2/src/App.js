import CategoryList from "./CategoryList";
import React, { Component } from "react";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.notify = this.notify.bind(this);
  }

  state = { currentCategory: "", products: [], cart: [] };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (seoUrl) => {
    let url = "http://localhost:3000/comments";
    if (seoUrl) {
      url += "?id=" + seoUrl;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  removeFromCart = (cartItem) => {
    let newCart;
    console.log(cartItem.quantity);
    if (cartItem.quantity > 1) {
      newCart = this.state.cart.map((obj) =>
        obj.product.id === cartItem.product.id
          ? { ...obj, quantity: obj.quantity - 1 }
          : obj
      );
    } else {
      newCart = this.state.cart.filter(
        (c) => c.product.id !== cartItem.product.id
      );
    }

    this.setState({ cart: newCart });
  };
  notify() {
    return toast.success("Wow so easy!");
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
      this.setState({ cart: newCart });
    }
    this.setState({ cart: newCart });
    this.notify();
  };

  render() {
    let productInfo = { title: "ProductList" };
    let CetegoryInfo = { title: "CategoryList" };
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={CetegoryInfo}
              />
            </Col>

            <Col xs="9">
              <ProductList
                addToCart={this.addToCart}
                info={productInfo}
                products={this.state.products}
              />
            </Col>
          </Row>
          <ToastContainer/>
        </Container>
      </div>
    );
  }
}
