import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import CartList from "./CartList";
import NotFound from "./NotFound";
export default class Router extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" Component={App}/>
          <Route exact path="/cart" Component={CartList} />
          <Route Component={NotFound} />
        </Routes>
      </div>
    );
  }
}

