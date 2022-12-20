import React, { Component } from "react";
import CounterComponent from "./CounterComponent";

class Counters extends Component {
  state = {
    counter: [
      { id: 0, count: 0 },
      { id: 1, count: 0 },
      { id: 2, count: 0 },
      { id: 3, count: 0 },
    ],
  };

  handleIncrement = (temp) => {
    const counter = [this.state.counter];
    const index = counter.indexOf(temp);
    counter[index] = { ...counter };
    counter[index].count++;
    this.setState({ counter });
  };

  handleReset = () => {
    const counter = this.state.counter.map((item) => {
      item.value = 0;
      return item;
    });
    this.setState({ counter });
  };
  handleDelete = (temp) => {
    // const counter = this.state.counter.filter((item) => item.id !== temp.id);
    // this.setState({ counter });
    console.log(temp);
    // this.state.counter.filter((item) => console.log(item.id));
    const counter = this.state.counter.filter((item) => item.id !== temp);
    this.setState({ counter });
  };
  render() {
    return (
      <div>
        <button
          onClick={() => this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counter.map((item) => (
          <CounterComponent
            key={item.id}
            counter={item}
            delete={this.handleDelete}
            onIncrement={this.handleIncrement}
          ></CounterComponent>
        ))}
      </div>
    );
  }
}

export default Counters;
