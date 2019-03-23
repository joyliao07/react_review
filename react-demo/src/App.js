import React, { Component } from 'react';
// import React, { useState} from 'react';
import './App.css';
import Person from './Person/Person';
import { PassThrough } from 'stream';
import Radium from 'radium';

class App extends Component {
// const app = props => {
  state = {
    persons: [
      {id: '1', name: 'Joyce', hobby: 'code'},
      {id: '2', name: 'Huckle', hobby: 'sleep'},
    ],
    showPersons: false,
  }
  // const [personState, setPersonState] = useState({
  //   persons: [
  //     {name: 'Joyce', hobby: 'code'},
  //     {name: 'Huckle', hobby: 'sleep'},
  //   ]
  //   });

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;

    this.setState({
      persons: persons
    })
  } 

  togglePersonHandler = () => {
    // console.log('showPersons: ', this.state.showPersons);
    this.setState({
      showPersons: !this.state.showPersons,
    })
  }
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {

    // styling for the button
    let style = {
      backgroundColor: 'white',
      border: '2px solid pink',
      padding: '8px 15px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'pink',
        color: 'black',
      }
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
              // changed={(event) => this.changeNameHandler(event, person.id)}
              changed={(event) => this.changeNameHandler(event, person.id)}
              click={this.deletePersonHandler.bind(this, index)}
              key={person.id}>
              She also likes to dance! </Person>
          )})}
        </div>
      );
      style.backgroundColor = 'green';
      style.border = 'none';
      style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black',
      }}

    let classes = [];

    if (this.state.persons.length <= 1) {
      classes.push('red');
    }
    if (this.state.persons.length === 0) {
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1 className={classes.join(' ')}>React app testing</h1>
        <button 
          onClick={() => this.togglePersonHandler()}
          style={style}>Show/Hide</button>

        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'app'}, React.createElement('h1', null, 'I\'m using an alternative render method.'), React.createElement('p', null, 'second element here.'));
  }
}

export default Radium(App);
