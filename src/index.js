import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './redux/configureStore';
import './index.css';
import Root from './components/Root';

injectTapEventPlugin();

ReactDOM.render(
    <Root store={configureStore()}/>,
  document.getElementById('root')
);
