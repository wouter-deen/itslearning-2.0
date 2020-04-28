import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { indigo, red} from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#ff1464',
    },
    primary: {
      main: '#ffff64',
      light: '#ffff9e',
      dark: '#e0d75a'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App/>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
