import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
    state = {
      showSideDrawer: false,
    }

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
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
