import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import PlayLogger from './containers/PlayLogger/PlayLogger';
import Website from './containers/Website/Website';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Layout>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Switch>
                <Route path="/play-logger" component={PlayLogger} />
                <Route path="/" component={Website} />
            </Switch>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
