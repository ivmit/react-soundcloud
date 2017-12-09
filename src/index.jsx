import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actionTypes from './actions/index';
import Stream from './components/Stream';

const tracks = [
  {
    title: 'Some track',
    id: 0,
  },
  {
    title: 'Some other track 2',
    id: 1,
  },
  {
    title: 'Some other track 3',
    id: 2,
  },
];

const store = configureStore();
store.dispatch(actionTypes.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
    <Stream />
  </Provider>,
  global.document.getElementById('app'),
);

module.hot.accept();
