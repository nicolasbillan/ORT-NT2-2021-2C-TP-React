import { Component } from "react";
import TodoCounter from "./TodoCounter";
import TodoItem from "./TodoItem";
import TodoSearchBox from "./TodoSearchBox";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      filter: "",
      filteredItems: [],
    };
  }

  addItem() {
    const item = {
      text: prompt("Ingrese nombre de tarea"),
      done: false,
      id: this.state.items.length,
    };

    if (!item.text || !item.text.trim()) return;

    let newList = this.state.items.map((item) => ({ ...item }));
    newList.push(item);
    this.setState({ items: newList }, this.filterList);
  }

  filterList() {
    const filteredList = this.state.items.filter(
      (i) =>
        this.state.filter === "" ||
        i.text.toUpperCase().includes(this.state.filter.toUpperCase())
    );
    this.setState({ filteredItems: filteredList });
  }

  onKeyUpSearch(e) {
    this.setState({ filter: e.target.value }, this.filterList);
  }

  onChangeStatus(e) {
    const { name, checked } = e.target;

    const newList = this.state.items.map((item) => ({
      ...item,
      done: item.id === parseInt(name) ? checked : item.done,
    }));

    this.setState({ items: newList }, this.filterList);
  }

  render() {
    return (
      <div>
        <button onClick={this.addItem.bind(this)}>Agregar</button>
        <div className='container'>
          <div className='row'>
            <TodoCounter
              message='Total tareas'
              number={this.state.items.length}
            />
            <TodoCounter
              message='Tareas sin hacer'
              number={this.state.items.filter((i) => !i.done).length}
            />
            <TodoSearchBox onKeyUp={this.onKeyUpSearch.bind(this)} />
          </div>
        </div>
        <ul>
          {this.state.filteredItems.map((i) => {
            return (
              <li>
                <TodoItem
                  text={i.text}
                  id={i.id}
                  done={i.done}
                  onChange={this.onChangeStatus.bind(this)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
