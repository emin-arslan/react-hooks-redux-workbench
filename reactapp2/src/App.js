import CategoryList from "./CategoryList";
import React, { Component } from "react";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [] };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id)
  };

  componentDidMount(){
    this.getProducts();
  } 
  
  getProducts = (seoUrl) => {

    let url = "http://localhost:3000/comments";
    if(seoUrl){
      url+="?id="+seoUrl;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  render() {
    let productInfo = { title: "ProductList" };
    let CetegoryInfo = { title: "CategoryList" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={CetegoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList info={productInfo} products={this.state.products} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
