import React, { Component } from 'react';
// import React, { useState} from 'react';
import AppCss from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Person from '../components/Persons/Person/Person';
import { PassThrough } from 'stream';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

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
    
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
          <Persons
          clicked = {this.deletePersonHandler}
          changed = {this.changeNameHandler}
          persons = {this.state.persons}/>
      );
    }

    return (
      <div className={AppCss.App}>
        <Cockpit
        persons = {this.state.persons}
        clicked = {this.togglePersonHandler}/>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'app'}, React.createElement('h1', null, 'I\'m using an alternative render method.'), React.createElement('p', null, 'second element here.'));
  }
}

export default App;
