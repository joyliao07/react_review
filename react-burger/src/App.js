import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
    state = {
      showSideDrawer: false,
    }

    // componentDidMount () {
    //   setTimeout(() => {
    //     this.setState({show: false});
    //   }, 5000);
    // }

    sideDrawerClosedHandler = () => {
      this.setState({showSideDrawer: false});
    }

    drawerToggleHandler = () => {
      this.setState((prevState) => {
        return { showSideDrawer: !prevState.showSideDrawer };
      });
    }

  render() {
    return (
      <div>
        <Layout 
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          drawerToggle={this.drawerToggleHandler}>
          {/* <BurgerBuilder/>
          <Checkout/> */}
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
