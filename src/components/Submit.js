import React, { Component } from "react";

class Submit extends Component {
  state = {
    checked: false
  };
  toDoInput = React.createRef();
  limitDate = React.createRef();
  critical = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    const isCritical = this.critical.current.value === "on" ? true : false;
    const toDo = {
      id: Date.now(),
      title: this.toDoInput.current.value,
      isDone: false,
      limitDate: this.limitDate.current.value,
      isCritical: isCritical
    };
    console.log(toDo);
    this.props.onSubmit(toDo);
    event.target.reset();
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-md-3">
            <input
              ref={this.toDoInput}
              type="text"
              className="form-control"
              name="todo"
              placeholder="Type something..."
            />
          </div>
          <div className="form-group col-md-3">
            <input
              ref={this.limitDate}
              type="date"
              className="form-control"
              name="limitdate"
              placeholder="pick a date "
            />
          </div>

          <div className="form-group col-md-3">
            <label>
              <input
                type="checkbox"
                className="check-list"
                ref={this.critical}
              />
              Critical ?
            </label>
          </div>
          <div className="form-group col-md-3">
            <button type="submit" className="btn btn-primary">
              + Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Submit;
