import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Here is {props.name} who likes to {props.hobby}.</p>
            <p>{props.children}</p>
        </div>
        
        
        
        )
};

export default person;
