import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const persons = (props) => props.persons.map( (person, index) => {
        return <ErrorBoundary key={person.id}>
          <Person 
          name={person.name} 
          hobby={person.hobby}
          click={() => props.clicked( index )}
          changed={(event) => props.changed(event, person.id)}>
          She also likes to dance! </Person>
          </ErrorBoundary>
      });

export default persons;
