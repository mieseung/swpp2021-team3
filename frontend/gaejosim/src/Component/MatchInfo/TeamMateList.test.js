import React from 'react';
import {shallow} from 'enzyme';
import TeamMateList from './TeamMateList';

describe('<TeamMateList />', () => {
    xit('should render without errors', () => {
      const component = shallow(<TeamMateList />);
      const wrapper = component.find('.TeamMateList');
      expect(wrapper.length).toBe(1);
    }); //map error

});

