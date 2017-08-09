import { shallow } from 'enzyme';
import React from 'react';
import Row from '../index';

describe('<Row />', () => {
  it('Should render', () => {
    const fixture = (<div className="row">row</div>);
    const renderedComponent = shallow(<Row>row</Row>);
    expect(renderedComponent.contains(fixture)).toBe(true);
  });
});
