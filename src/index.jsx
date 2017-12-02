import React from 'react';
import ReactDOM from 'react-dom';
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
  <Stream tracks={tracks} />,
  global.document.getElementById('app'),
);

module.hot.accept();
