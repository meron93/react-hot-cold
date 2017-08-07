import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav/>', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Should call onInfo when what is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<TopNav onInfo={callback} />);
    wrapper.find('.what').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('Should call onNewGame when + New Game is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<TopNav onNewGame={callback} />);
    wrapper.find('.new').simulate('click');
    expect(callback).toHaveBeenCalled();
  });  
})