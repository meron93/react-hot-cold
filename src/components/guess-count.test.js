import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count.js';

describe('<GuessCount/>', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Should render the correct numnber of guesses', () => {
    const guessCount = 10;
    const wrapper = shallow(<GuessCount count={guessCount} />);
    expect(wrapper.text()).toEqual(`Guess #${guessCount}!`)
  })
})