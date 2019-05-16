import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <ToolBar/>
        <SideDrawer/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
