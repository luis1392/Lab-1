import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Submit from "./components/Submit";
import ToDoList from "./components/ToDoList";
import FilterToDoList from "./components/FilterToDoList";

class App extends Component {
  state = {
    toDoList: [
      {
        id: 1,
        title: "Clean the house",
        isDone: false,
        isCritical: true,
        limitDate: "09/13/2018"
      },
      {
        id: 2,
        title: "Drink coffe",
        isDone: true,
        isCritical: false,
        limitDate: "09/13/2018"
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
            <div className="col-md-10 col-md-offset-1">
              <Submit onSubmit={this.handleSubmit} />
              {/* <FilterToDoList /> */}
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
