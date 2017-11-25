import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <Stream tracks={tracks} />,
  global.document.getElementById('app'),
);

module.hot.accept();
