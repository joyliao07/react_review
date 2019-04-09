import React, {Component} from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends Component {

  // componentWillUnmount() {
  //   console.log('to clean up in Persons.js')
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponenetUpdate in Persons.js.')
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  render () {
    return this.props.persons.map( (person, index) => {
          return <ErrorBoundary key={person.id}>
            <Person 
            name={person.name} 
            hobby={person.hobby}
            click={() => this.props.clicked( index )}
            changed={(event) => this.props.changed(event, person.id)}
            isAuth = {this.props.isAuthenticated}>
            She also likes to dance! </Person>
            </ErrorBoundary>
    });
  }
}

export default Persons;
