import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track 2'
  },
  {
    title: 'Some other track 3'
  }
]

ReactDOM.render(
  <Stream tracks={tracks} />,
  document.getElementById('app')
);

module.hot.accept();
