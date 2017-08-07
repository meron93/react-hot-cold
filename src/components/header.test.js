import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header/>', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('Hides the infoModal initially', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('InfoModal').exists()).toEqual(false);
  });

  it('Toggles the infoModal', () => {
    const wrapper = shallow(<Header />);
    wrapper.instance().toggleInfoModal(true);
    expect(wrapper.find('InfoModal').exists()).toEqual(true);
  });
})