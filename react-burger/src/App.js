import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
    state = {
      showSideDrawer: true,
    }

    sideDrawerClosedHandler = () => {
      this.setState({showSideDrawer: false});
    }

  render() {
    return (
      <div>
        <Layout 
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
