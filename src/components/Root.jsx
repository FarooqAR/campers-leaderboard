import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import App from './App/App';

const Root = ({store}) => (
    <MuiThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
);
export default Root;