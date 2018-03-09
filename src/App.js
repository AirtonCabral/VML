import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Sidebar from './containers/Sidebar/Sidebar';
import MainContainer from './containers/MainContainer/MainContainer';
import classes from './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Route path='/' component={Sidebar} />
          <Route path='/container' component={MainContainer} />
        </Layout>
      </div>
    );
  }
}

export default App;
