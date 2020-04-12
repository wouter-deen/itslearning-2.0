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
    secondary: red,
    primary: {
      main: indigo.A400,
      light: indigo[200],
      dark: indigo[700]
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
