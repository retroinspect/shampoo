import React, { Component} from 'react';
import { Router, Route } from 'react-router';
import Header from './components/header/Header'
import ShoppingList from './components/shoppingList/ShoppingList';
import Settings from './containers/Settings';
import Record from './containers/Record';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css'
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00796b'
        },
        secondary: {
            main: '#FFFFFF'
        },
    },
    status: {
        danger: 'orange',
    },
    typography: {
        fontFamily: 'RecipeKorea'
    }
});

class App extends Component {

  render() 
  {

    return (
      <ThemeProvider theme={theme} className="App">
          <Header/>
          <Route exact path="/"><ShoppingList/></Route>
          <Route exact path="/Record"><Record></Record></Route>
          <Route exact path="/Settings"><Settings></Settings></Route>
      </ThemeProvider>
    );
  }
}

export default App;
