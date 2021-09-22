import { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.text}
          <input
            name={this.props.id}
            type='checkbox'
            checked={this.props.done}
            onChange={this.props.onChange}
          />
        </p>
      </div>
    );
  }
}

export default TodoItem;
