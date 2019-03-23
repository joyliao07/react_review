import React from 'react';
import "./Person.css";


const person = (props) => {
    // const style = {
    //     '@media (min-width: 550px)': {
    //         width: '550px',
    //     }
    // }

    return (
        <div className="Person">
            <p>Here is {props.name} who likes to {props.hobby}.</p>
            <p>{props.children}</p>
            <input type="text" placeholder="Type a name" onChange={props.changed}></input>
            <button onClick={props.click}>Remove</button>
        </div>
        )
};

export default person;
