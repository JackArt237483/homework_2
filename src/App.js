import React, { Component } from 'react';
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorOne: "red",
      colorTwo: "blue"
    };
  }

  clickToBtn = (colorNumber) => {
    if (colorNumber === 1) {
      this.setState(prevState => ({
        colorOne: prevState.colorOne === "red" ? "blue" : "red"
      }));
    } else if (colorNumber === 2) {
      this.setState(prevState => ({
        colorTwo: prevState.colorTwo === "blue" ? "red" : "blue"
      }));
    }
  };

  render() {
    return (
      <div className='App'>
        <button onClick={() => this.clickToBtn(1)} className={this.state.colorOne}></button>
        <button onClick={() => this.clickToBtn(2)} className={this.state.colorTwo}></button>
      </div>
    );
  }
}
