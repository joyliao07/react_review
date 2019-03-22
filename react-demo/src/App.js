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

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, hobby: 'code'},
        {name: 'Huckle', hobby: 'sleep'}
      ],
      showPersons: false,
    })
  } 

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    })
  }
  
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {

    // styling for the button
    const style = {
      backgroundColor: 'white',
      border: '2px solid pink',
      padding: '8px 15px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return(
            <Person 
              name={person.name} 
              hobby={person.hobby}
              click={this.deletePersonHandler.bind(this, index)}
              changed={this.changeNameHandler}>
              She also likes to dance! </Person>
          )})}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React app testing</h1>
        <button 
          onClick={() => this.togglePersonHandler()}
          style={style}>Change</button>

        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'app'}, React.createElement('h1', null, 'I\'m using an alternative render method.'), React.createElement('p', null, 'second element here.'));
  }
}

export default App;
