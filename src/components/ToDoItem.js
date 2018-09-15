import React, { Component } from "react";

class ToDoItem extends Component {
  state = {
    done: this.props.task.isDone
  };
  onChangeCheck = () => {
    this.setState({
      done: !this.state.done
    });
  };

  render() {
    const doneTask = "done-task ";
    return (
      <React.Fragment>
        <li className={`list-group-item ${this.state.done ? doneTask : ""}`}>
          <input
            ref={this.doneCheckInput}
            type="checkbox"
            className="check-list"
            checked={this.state.done}
            onChange={this.onChangeCheck}
          />
          {this.props.task.title}
          <button
            type="button"
            className="btn btn-danger delete-item"
            onClick={() => this.props.onDelete(this.props.task)}
          >
            X
          </button>
        </li>
      </React.Fragment>
    );
  }
}
export default ToDoItem;
