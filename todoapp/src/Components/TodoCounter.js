import { Component } from "react";

class TodoCounter extends Component {
  render() {
    return <div>{`${this.props.message}: ${this.props.number}`}</div>;
  }
}

export default TodoCounter;
