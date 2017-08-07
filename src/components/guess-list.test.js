import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]}/>);
  });

  it('Should render the correct guess list', () => {
    const guessList = [1, 8, 34];
    const wrapper = shallow(<GuessList guesses={guessList} />);
    const items = wrapper.find('.list');
    expect(items.length).toEqual(guessList.length);
    guessList.forEach((value, index) => {
      expect(Number(items.at(index).text())).toEqual(value);
    });
  });
});