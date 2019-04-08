import React, {useEffect, useRef} from 'react';
import CockpitCss from './Cockpit.css';


const cockpit = (props) => {
    
    const toggleBtnRef = useRef(null);
    
    useEffect(() => {
      // We need to put this command line inside useEffect because useEffect is run after each complete render cycle; so this <toggleBtnRef.current.click();> is run after the entire JSX code has been rendered.
      toggleBtnRef.current.click();
    });


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
            className={CockpitCss.Button}
            ref={toggleBtnRef}>Show/Hide</button>
            <button onClick={props.login}>Login</button>
        </div>
    );
};

export default React.memo(cockpit);
