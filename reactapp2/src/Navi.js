import React, { Component } from 'react'
import CartSummary from './CartSummary'

export default class Navi extends Component {
  render() {
    return (
      <div>
         <CartSummary cart={this.props.cart}/>
      </div>
    )
  }
}
