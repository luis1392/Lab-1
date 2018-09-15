import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Submit from "./components/Submit";
import ToDoList from "./components/ToDoList";

class App extends Component {
  state = {
    toDoList: [
      {
        id: 1,
        title: "Clean the house",
        isDone: true,
        isCritical: false
      },
      {
        id: 2,
        title: "Drink coffe",
        isDone: false,
        isCritical: false
      }
    ]
  };
  handleSubmit = toDo => {
    const newListToDo = [...this.state.toDoList, toDo];

    this.setState({
      toDoList: newListToDo
    });
  };
  handleDelete = task => {
    const newListToDo = this.state.toDoList.filter(toDo => toDo.id !== task.id);

    this.setState({
      toDoList: newListToDo
    });
  };
  render() {
    return (
      <div className="App">
        <Header title="To Do List" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <Submit onSubmit={this.handleSubmit} />
            </div>
            <div className="col-md-10 col-md-offset-1">
              <ToDoList
                data={this.state.toDoList}
                onDelete={this.handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
