import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
// class Layout extends Component {
    // state = {
    //     showSideDrawer: true,
    // }

    // sideDrawerClosedHandler = () => {
    //     this.setState({showSideDrawer: false});
    // }

    // reder () {
        return(
            // <div>
            //     ABC
            // </div>
            <Aux>
                <ToolBar/>
                <SideDrawer 
                    open={props.open} 
                    closed={props.closed}
                    />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Aux>
        );
    // }
}

export default layout;
