import React from 'react';
import {shallow} from 'enzyme';
import ParValue from './ParValue';

describe('Par Value component', () => {
  let component;
  const mockProps = {
    rowValue: "1000"
  }

  beforeEach(() => {
    component = shallow(<ParValue
      {...mockProps}
    />);
  });

  it('should display par value for each trade item', () => {
    const expected = mockProps.rowValue;

    expect(component.html()).toEqual(expect.stringContaining(expected));
  });

  it('should have name attribute', () => {
    const expected = 'parValue';

    expect(component.prop('name')).toEqual(expected);
  })

});
