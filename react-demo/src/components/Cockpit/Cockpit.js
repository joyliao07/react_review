import React, {useEffect} from 'react';
import CockpitCss from './Cockpit.css';


const cockpit = (props) => {
    
    // useEffect(() => {
    //   console.log('useEffect');
    //   // HTTP request..
    //   setTimeout(() => {
    //     alert('Cloud updated.')
    //   }, 1000);
    //   // This function will run only when persons are changed
    // }, [props.persons]);
    
    // useEffect(() => {
    //   console.log('useEffect');
    //   // HTTP request..
    //   setTimeout(() => {
    //     alert('Cloud updated - one time only.')
    //   }, 1000);
    //   // This function will run only for one time.
    // }, []);
    
    // useEffect(() => {
    //   setTimeout(() => {
    //     alert('Cloud updated - one time only.')
    //   }, 1000);
    //   return () => {
    //     console.log('You can cleanup here with useEffect.')
    //   }
    // });


    let assignedClasses = [];
    if (props.personsLength <= 1) {
      assignedClasses.push(CockpitCss.red);
    }
    if (props.personsLength === 0) {
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

export default React.memo(cockpit);