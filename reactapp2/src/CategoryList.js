import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: " Baverages" },
        { categoryId: 2, categoryName: " Condiments" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem>qdwdqwdqwdwww</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
