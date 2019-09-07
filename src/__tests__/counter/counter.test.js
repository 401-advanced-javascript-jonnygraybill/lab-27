import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../../../src/components/app/app.js';
import Counter from '../../components/counter/counter.js';
import { exportAllDeclaration, isTSAnyKeyword } from '@babel/types';

describe('<Counter/>', () => {
  it('is alive at application start', () => {
    let app = shallow(<Counter />);
    expect(app.find('span').exists()).toBeTruthy();
  });

  it('decrements state on a click down', () => {
    let app = mount(<Counter />);
    let button = app.find('#decr');
    button.simulate('click');
    expect(app.state('count')).toBe(-1);
  });

  it('increments state on a click up', () => {
    let app = mount(<Counter />);
    let button = app.find('#incr');
    button.simulate('click');
    expect(app.state('count')).toBe(+1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});