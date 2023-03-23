import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleCahange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    toast.success(this.state.email + " added to db!");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">E-mail</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter E-mail"
              onChange={this.handleCahange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter E-password"
              onChange={this.handleCahange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleCahange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <label for="city">City</label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleCahange}
            >
              <option>Ankara</option>
              <option>İzmir</option>
              <option>İstanbul</option>
              <option>Diyarbakır</option>
              <option>Konya</option>
            </Input>
          </FormGroup>
          <Button tpye="submit">Save</Button>
        </Form>
        <ToastContainer />
      </div>
    );
  }
}
