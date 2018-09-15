import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  renderList(tasksToDo) {
    const list = tasksToDo.map(element => {
      return (
        <ToDoItem
          key={element.id}
          task={element}
          onDelete={this.props.onDelete}
        />
      );
    });

    return list;
  }

  render() {
    return (
      <React.Fragment>
        <ul className="list-group">{this.renderList(this.props.data)}</ul>
      </React.Fragment>
    );
  }
}

export default ToDoList;
