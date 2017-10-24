import React from 'react';
import { expect } from 'chai';
import jsdom from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;

global.document = document;
global.window = document.defaultViews;

Object.keys(document).forEach((key) => {
  if (!(key in global)) {
    global[ key ] = document[ key ];
  }
});

global.React = React;
global.expect = expect;
