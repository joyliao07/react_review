import React from 'react';
import classes from './Modal.css'
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show}/>
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    ocapcity: props.show ? '1' : '0',
                }}
                > { props.children }
            </div>
        </Aux>
        
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
