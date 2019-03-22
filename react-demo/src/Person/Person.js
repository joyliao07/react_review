import React from 'react';
import "./Person.css";

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Here is {props.name} who likes to {props.hobby}.</p>
            <p>{props.children}</p>
            <input type="text" placeholder="Type a name" onChange={props.changed} value={props.name}></input>
        </div>
        
        
        
        )
};

export default person;
