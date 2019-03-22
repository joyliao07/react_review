import React, { Component } from 'react';
// import React, { useState} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
// const app = props => {
  state = {
    persons: [
      {name: 'Joyce', hobby: 'code'},
      {name: 'Huckle', hobby: 'sleep'},
    ]
  }
  // const [personState, setPersonState] = useState({
  //   persons: [
  //     {name: 'Joyce', hobby: 'code'},
  //     {name: 'Huckle', hobby: 'sleep'},
  //   ]
  //   });

  changeHobbyHandler = (newHobby) => {
    this.setState({
      persons: [
        {name: 'Joycy', hobby: newHobby},
        {name: 'Huckleberry', hobby: 'dream'},
      ]
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, hobby: 'code'},
        {name: 'Huckle', hobby: 'sleep'}
      ]
    })
  } 
  
  render() {
    const style = {
      backgroundColor: 'white',
      border: '2px solid pink',
      padding: '8px 15px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>React app testing</h1>
        <button 
          onClick={() => this.changeHobbyHandler('cook')}
          style={style}>Change</button>
        <Person 
          name={this.state.persons[0].name} 
          hobby={this.state.persons[0].hobby}
          click={this.changeHobbyHandler.bind(this, "write")}
          changed={this.changeNameHandler}>
          She also likes to dance! </Person>
        <Person 
          name={this.state.persons[1].name} 
          hobby={this.state.persons[1].hobby}>
          She also likes opera! </Person>
      </div>
    );
    // return React.createElement('div', {className: 'app'}, React.createElement('h1', null, 'I\'m using an alternative render method.'), React.createElement('p', null, 'second element here.'));
  }
}

export default App;
