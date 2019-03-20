import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>React app testing</h1>
    //   </div>
    // );
    return React.createElement('div', {className: 'app'}, React.createElement('h1', null, 'I\'m using an alternative render method.'))
  }
}

export default App;
