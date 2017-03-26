import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../../redux/configureStore';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = configureStore();
  injectTapEventPlugin();
  ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </MuiThemeProvider>,
   div);
});