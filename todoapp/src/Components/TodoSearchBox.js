import { Component } from "react";

class TodoSearchBox extends Component {
  render() {
    return (
      <div>
        <label>Buscar:</label>
        <input onKeyUp={this.props.onKeyUp} />
      </div>
    );
  }
}

export default TodoSearchBox;
