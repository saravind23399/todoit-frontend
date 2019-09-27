import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import LisitingsView from './ListingsView';

export default class RootView extends Component {
  render() {
    return (
        <HashRouter>
          <Route to="/" component={LisitingsView} />
        </HashRouter>
    );
  }
}
