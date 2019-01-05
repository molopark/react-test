import React, { Component } from 'react';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <fragment>
        <div className="App">
        리액트
        </div>
        <hr/>
        <MyName name="리액트" />
        <hr/>
        <Counter />
      </fragment>
    );
  }
}

export default App;
