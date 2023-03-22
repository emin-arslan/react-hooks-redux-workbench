import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.body}</td>
                <td>
                  {" "}
                  <Button onClick={() => this.props.addToCart(product)} color="info">
              
                    add to card
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </div>
    );
  }
}
