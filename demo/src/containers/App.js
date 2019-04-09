import React, { Component } from 'react';
// import React, { useState} from 'react';
import AppCss from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';


class App extends Component {
// const app = props => {

  constructor(props){
    super(props);
    this.state = {
      persons: [
        {id: '1', name: 'Joyce', hobby: 'code'},
        {id: '2', name: 'Huckle', hobby: 'sleep'},
      ],
      showPersons: false,
      authenticated: false,
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   //here you update the state
  //   console.log('getderived', props);
  //   return state;
  // }

  // state = {
  //   persons: [
  //     {id: '1', name: 'Joyce', hobby: 'code'},
  //     {id: '2', name: 'Huckle', hobby: 'sleep'},
  //   ],
  //   showPersons: false,
  // }

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
  };

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    })
  };
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  };

  loginHandler = () => {
    this.setState({
      authenticated: true,
    })
  };


  render() {
    
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
          <Persons
          clicked = {this.deletePersonHandler}
          changed = {this.changeNameHandler}
          persons = {this.state.persons}
          isAuthenticated = {this.state.authenticated}/>
      );
    }

    return (
      <Aux>
      {/* <div className={AppCss.App}> */}
      {/* <WithClass classes={AppCss.App}> */}
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated, 
            login: this.loginHandler,
          }}>
        <Cockpit
        personsLength = {this.state.persons.length}
        clicked = {this.togglePersonHandler}
        title = {this.props.appTitle}/>
        {persons}
        {/* </WithClass> */}
        {/* </div> */}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'app'}, React.createElement('h1', null, 'I\'m using an alternative render method.'), React.createElement('p', null, 'second element here.'));
  }
}

// export default App;
export default withClass(App, AppCss.App);
