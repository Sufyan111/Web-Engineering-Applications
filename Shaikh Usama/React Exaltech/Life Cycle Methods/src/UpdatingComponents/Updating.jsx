import React, { Component } from "react";

class Updating extends Component {
  shouldComponentUpdate() {
    console.log("lifecycleA shouldComponentUpdate");
    return true;
  }
  render() {
    return <div></div>;
  }
}

export default Updating;
