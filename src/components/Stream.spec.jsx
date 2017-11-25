import { shallow } from 'enzyme';
import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import Stream from './Stream';


describe('Stream', () => {
  const props = {
    tracks: [{ title: 'x', id: 1 }, { title: 'y', id: 2 }, { title: 'z', id: 3 }],
  };

  it('shows two elements', () => {
    const element = shallow(<Stream {...props} />);

    expect(element.find('.track')).to.have.length(3);
  });
});
