import React, { Component } from "react";
import { Table } from "reactstrap";
export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.body}</td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
