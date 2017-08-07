import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm/>', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Should call onGuess when value is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback} />);
    const value = 20;
    wrapper.find('#userGuess').node.value = value;
    wrapper.find('#userGuess').simulate('submit');
    expect(callback).toHaveBeenCalled();
  });

  it('Should set the input back to an empty string', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback} />);
    const value = 20;
    wrapper.find('#userGuess').node.value = value;
    wrapper.find('#userGuess').simulate('submit');
    expect(wrapper.find('#userGuess').node.value).toEqual('');
  });
});