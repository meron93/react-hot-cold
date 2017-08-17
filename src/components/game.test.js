import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game/>', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  it('Should start a new game', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [1, 45, 66],
      feedback: "Youre cold",
      correctAnswer: -1
    });
    wrapper.instance().newGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  });
});