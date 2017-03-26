import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../../redux/configureStore';
import {fetchCampersInfo} from '../../redux/modules/campersInfo';
import {List} from './List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = configureStore();
  const _List = <List fetchCampersInfo={fetchCampersInfo}/>;
  injectTapEventPlugin();
  ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            {_List}
        </Provider>
    </MuiThemeProvider>,
   div);
    
});