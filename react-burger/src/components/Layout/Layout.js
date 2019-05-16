import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <ToolBar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
