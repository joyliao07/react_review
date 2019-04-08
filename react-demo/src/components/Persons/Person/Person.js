import React, {Component, Fragment} from 'react';
import PersonCss from "./Person.css";
import App from '../../../containers/App';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

// const person = (props) => {
class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render () {
        return (
            <Aux>
            {/* <div> */}
            {/* // <Fragment className={PersonCss.Person}> */}
                <p>Here is {this.props.name} who likes to {this.props.hobby}.</p>
                <p>{this.props.children}</p>
                <input 
                    type="text"
                    placeholder="Type a name" 
                    onChange={this.props.changed}
                    // ref = {(inputEl) => {this.inputElement = inputEl}}
                    ref = {this.inputElementRef}
                    /> 
                <button onClick={this.props.click} className={PersonCss.Button}>Remove</button>
            {/* </Fragment> */}
            {/* </div> */}
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    hobby: PropTypes.string,
    changed: PropTypes.func,
};

// export default Person;
export default withClass(Person, PersonCss.Person);
