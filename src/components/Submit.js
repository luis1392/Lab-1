import React, { Component } from "react";

class Submit extends Component {
  toDoInput = React.createRef();

  handleSubmit = event => {
    event.preventDefault();

    const toDo = {
      id: Date.now(),
      title: this.toDoInput.current.value,
      isDone: false
    };
    this.props.onSubmit(toDo);
    event.target.reset();
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            {/* <label htmlFor="exampleInputEmail1"></label> */}
            <input
              ref={this.toDoInput}
              type="text"
              className="form-control"
              name="todo"
              placeholder="Type something..."
            />
            {/* <input
              ref={this.limitDate}
              type="date"
              className="form-control"
              name="limitdate"
            /> */}
          </div>

          {/* <div className="checkbox">
            <label>
                <input type="checkbox" /> Critical ?
            </label>
            </div> */}
          <button type="submit" className="btn btn-primary">
            + Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Submit;
