import React from 'react';
import CockpitCss from './Cockpit.css';


const cockpit = (props) => {
    
    let assignedClasses = [];
    if (props.persons.length <= 1) {
      assignedClasses.push(CockpitCss.red);
    }
    if (props.persons.length === 0) {
      assignedClasses.push(CockpitCss.bold);
    }



    return (
        <div className={CockpitCss.Cockpit}>
            <h1 className={assignedClasses.join(' ')}> {props.title} </h1>
            <button 
            onClick={props.clicked}
            className={CockpitCss.Button}>Show/Hide</button>
        </div>
    );
};

export default cockpit;