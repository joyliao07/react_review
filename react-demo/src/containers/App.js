import React, { Component } from 'react';
// import React, { useState} from 'react';
import AppCss from '../containers/App.css';
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
    
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return(
              <ErrorBoundary key={person.id}>
              <Person 
              name={person.name} 
              hobby={person.hobby}
              // changed={(event) => this.changeNameHandler(event, person.id)}
              changed={(event) => this.changeNameHandler(event, person.id)}
              click={this.deletePersonHandler.bind(this, index)}>
              She also likes to dance! </Person>
              </ErrorBoundary>
          )})}
        </div>
      );
    }

    let assignedClasses = [];

    if (this.state.persons.length <= 1) {
      assignedClasses.push(AppCss.red);
    }
    if (this.state.persons.length === 0) {
      assignedClasses.push(AppCss.bold);
    }

    return (
      <div className={AppCss.App}>
        <h1 className={assignedClasses.join(' ')}>React app testing</h1>
        <button 
          onClick={() => this.togglePersonHandler()}
          className={AppCss.Button}>Show/Hide</button>

        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'app'}, React.createElement('h1', null, 'I\'m using an alternative render method.'), React.createElement('p', null, 'second element here.'));
  }
}

export default App;
