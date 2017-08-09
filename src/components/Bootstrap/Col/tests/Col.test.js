import { shallow } from 'enzyme';
import React from 'react';
import Col from '../index';

describe('<Col />', () => {
  it('Should render', () => {
    const fixture = (<div className="col-xs-10 col-xs-offset-2 col-xs-pull-2 col-xs-push-3 col-sm-9 col-sm-offset-3 col-sm-pull-2 col-sm-push-2 col-md-6 col-md-offset-2 col-md-pull-2 col-md-push-2 col-lg-4 col-lg-offset-1 col-lg-pull-2 col-lg-push-3">col</div>);
    const renderedComponent = shallow(
      <Col
        size={{
          xs: 10,
          xsOffset: 2,
          xsPull: 2,
          xsPush: 3,
          sm: 9,
          smOffset: 3,
          smPull: 2,
          smPush: 2,
          md: 6,
          mdOffset: 2,
          mdPull: 2,
          mdPush: 2,
          lg: 4,
          lgOffset: 1,
          lgPull: 2,
          lgPush: 3,
        }}
      >
        col
      </Col>,
    );
    expect(renderedComponent.contains(fixture)).toBe(true);
  });
});
