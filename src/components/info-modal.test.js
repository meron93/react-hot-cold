import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal/>', () => {
  it('Renders without crashing', () => {
    shallow(<InfoModal />);
  });

  it('Fires the onClick callback when clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<InfoModal onClose={callback} />);
    wrapper.find('.close').simulate('click');
    expect(callback).toHaveBeenCalled;
  });
});