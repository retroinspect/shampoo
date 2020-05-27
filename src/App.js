import React from 'react';
import { Router, Route } from 'react-router';
import Header from './components/Header'
import ShoppingList from './containers/ShoppingList';
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

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
        <Header/>
        <Route exact path="/"><ShoppingList></ShoppingList></Route>
        <Route exact path="/Record"><Record></Record></Route>
        <Route exact path="/Settings"><Settings></Settings></Route>
    </ThemeProvider>
  );
}

export default App;
