import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#666';
let defaultStyle ={
  color: defaultTextColor
};


class Aggregate extends Component {
  render() {
    return (
      <div style={{ ...defaultTextColor, width: '40%', display: 'inline-block'}}>
        <h2 >Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img></img>
        <input type="text"/>
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, display:'inline-block', width: "25%" }}>
        <img></img>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song1</li>
          <li>Song2</li>
          <li>Song3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
