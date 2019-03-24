import React from 'react';
import PersonCss from "./Person.css";
import App from '../App';


const person = (props) => {
    // const style = {
    //     '@media (min-width: 550px)': {
    //         width: '550px',
    //     }
    // }

    return (
        <div className={PersonCss.Person}>
            <p>Here is {props.name} who likes to {props.hobby}.</p>
            <p>{props.children}</p>
            <input type="text" placeholder="Type a name" onChange={props.changed}></input>
            <button onClick={props.click} className={PersonCss.Button}>Remove</button>
        </div>
        )
};

export default person;
