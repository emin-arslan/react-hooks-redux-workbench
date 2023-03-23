import React, { Component } from 'react'

export default class FormDemo1 extends Component {
  state = {userName:''}
  onChangeHandler = (e) => {
    this.setState({userName:e.target.value})
  }
    render() {
    return (
      <div>
        <form>
            <h3>User Name</h3>
            <input onChange={this.onChangeHandler} type="text"></input>
            <h3>User Name is {this.state.userName}</h3>
        </form>
      </div>
    )
  }
}
