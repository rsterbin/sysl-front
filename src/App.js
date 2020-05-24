import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import PlayLogger from './containers/PlayLogger/PlayLogger';
import Website from './containers/Website/Website';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.module.css';

// // from [this so answer](https://stackoverflow.com/a/5624139)
// function hexToRgb(hex) {
//   // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
//   var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//   hex = hex.replace(shorthandRegex, function(m, r, g, b) {
//     return r + r + g + g + b + b;
//   });
// 
//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result ? {
//     r: parseInt(result[1], 16),
//     g: parseInt(result[2], 16),
//     b: parseInt(result[3], 16)
//   } : null;
// }

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/play-logger" component={PlayLogger} />
                <Route path="/" component={Website} />
            </Switch>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
