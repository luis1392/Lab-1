import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">{this.props.title}</a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
