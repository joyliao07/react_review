import React from 'react';
import classes from './Modal.css'

const modal = (props) => {
    return (
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                ocapcity: props.show ? '1' : '0',
            }}
        > { props.children }
        </div>
        
    );


    // if (props.show === true) { 
    //     return(
    //         <div className={classes.Modal}>
    //             { props.children }
    //         </div>
    //     );
    // } else {
    //     return(
    //         <div className={classes.Modal}>
                
    //         </div>
    //     );
    // }
}

export default modal;
