import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const pink_color = '#FF6464';
const blue_color = '#00BBF0';
const orange_color = '#FF6D24';
const green_color = '#4EF037';
const yellow_color = '#F0B917';
const sea_color = '#65EEB7';
const red_color = '#FD2E2E';
const violent_color = '#9F609C';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: pink_color };
    this.changeColor = this.changeColor.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  getColor(color) {
    switch (color) {
      case pink_color: return blue_color;
      case blue_color: return orange_color;
      case orange_color: return green_color;
      case green_color: return yellow_color;
      case yellow_color: return sea_color;
      case sea_color: return red_color;
      case red_color: return violent_color;
      case violent_color: return pink_color;
    }
  }

  changeColor() {
    // const newColor = this.state.color === pink_color ? blue_color : pink_color;
    const newColor = this.getColor(this.state.color);
    this.setState({color: newColor});
  }

  render() {
    return (
      <div className="App" style={{background: this.state.color}}>
        <div>
          <img src="img/pink-heart.png" width="50" height="50" onClick={this.countLikes}/>
        </div>
        <button className="App__button" onClick={this.changeColor}>Click me</button>
      </div>
    );
  }
}

export default App;
