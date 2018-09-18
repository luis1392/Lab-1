import React, { Component } from "react";

class ToDoItem extends Component {
  state = {
    isDone: this.props.task.isDone,
    isCritical: this.props.task.isCritical
  };

  onChangeCheck = () => {
    this.setState({
      isDone: !this.state.isDone
    });
  };

  render() {
    const doneTask = "done-task ";
    const criticalTask = "critical-task";
    return (
      <React.Fragment>
        <li className={`list-group-item  ${this.state.isDone ? doneTask : ""}`}>
          <input
            ref={this.doneCheckInput}
            type="checkbox"
            className="check-list"
            checked={this.state.isDone}
            onChange={this.onChangeCheck}
          />
          {this.props.task.title}
          <p className="date-task">{this.props.task.limitDate}</p>
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
