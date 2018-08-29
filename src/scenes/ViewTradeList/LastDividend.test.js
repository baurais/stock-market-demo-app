import React from 'react';
import {shallow} from 'enzyme';
import LastDividend from './LastDividend';

describe('Last Dividend component', () => {
  let component;
  const mockProps = {
    rowValue: "10"
  }

  beforeEach(() => {
    component = shallow(<LastDividend
      {...mockProps}
    />);
  });

  it('should display last dividend for each trade item', () => {
    const expected = mockProps.rowValue;

    expect(component.html()).toEqual(expect.stringContaining(expected));
  });

  it('should have name attribute', () => {
    const expected = 'lastDividend';

    expect(component.prop('name')).toEqual(expected);
  })

});
