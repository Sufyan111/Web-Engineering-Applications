import React, { Component } from "react";

class Child extends Component {
  render() {
    // console.log(this.props.count);
    return (
      <div>
        <h1>Data from Class component</h1>
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}

export default Child;
