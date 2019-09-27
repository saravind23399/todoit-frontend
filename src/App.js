import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './styles/theme';

import AppBarComponent from './components/nav/appbar/AppBarComponent';
import RootView from './views/RootView';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppBarComponent />
        <RootView />
      </ThemeProvider>
    );
  }
}
