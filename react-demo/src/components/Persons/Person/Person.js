import React, {Component, Fragment} from 'react';
import PersonCss from "./Person.css";
// import App from '../App';
import App from '../../../containers/App';
import Aux from '../../../hoc/Aux';

// const person = (props) => {
class Person extends Component {
    render () {
        return (
            <div className={PersonCss.Person}>
            {/* // <Fragment className={PersonCss.Person}> */}
            {/* // <Aux> */}
                <p>Here is {this.props.name} who likes to {this.props.hobby}.</p>
                <p>{this.props.children}</p>
                <input type="text" placeholder="Type a name" onChange={this.props.changed}></input> 
                <button onClick={this.props.click} className={PersonCss.Button}>Remove</button>
            {/* </Aux> */}
            {/* </Fragment> */}
            </div>
        );
    }
}

export default Person;
