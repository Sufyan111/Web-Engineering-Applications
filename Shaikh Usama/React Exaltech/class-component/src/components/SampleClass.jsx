import React, { Component } from "react";
import SampleFunction from "../SampleFunction";
import Child from "./Child";
export class SampleClass extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  handleReset = () => {
    this.setState({ counter: (this.state.counter = 0) });
  };
  render() {
    // console.log(this.state);
    return (
      <div>
        <Child count={this.state.counter}></Child>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
        <SampleFunction data={this.state.counter}></SampleFunction>
      </div>
    );
  }
}
