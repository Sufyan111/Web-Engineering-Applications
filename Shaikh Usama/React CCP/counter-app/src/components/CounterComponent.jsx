import React, { Component } from "react";

class CounterComponent extends Component {
  formatCount() {
    const { count } = this.props.counter;
    return count === 0 ? <h5>Zero</h5> : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.count === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <span style={{ margin: "100px" }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.delete(this.props.counter.id)}
          className="btn btn-danger m-2 btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default CounterComponent;
