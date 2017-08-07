import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection/>', () => {
  it('Renders without crashing', () => {
    shallow(<GuessSection />);
  });

  it('Renders the correct feedback', () => {
    const string = "Not even close man";
    const wrapper = shallow(<GuessSection feedback={string} />);
    expect(wrapper.find('#feedback').text()).toEqual(string);
  })
})