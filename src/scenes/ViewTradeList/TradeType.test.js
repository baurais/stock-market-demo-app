import React from 'react';
import {shallow} from 'enzyme';
import TradeType from './TradeType';

describe('Par Value component', () => {
  let component;
  const mockProps = {
    rowValue: "preferred"
  }

  beforeEach(() => {
    component = shallow(<TradeType
      {...mockProps}
    />);
  });

  it('should display trade type for each trade item', () => {
    const expected = mockProps.rowValue;

    expect(component.html()).toEqual(expect.stringContaining(expected));
  });

  it('should have name attribute', () => {
    const expected = 'tradeType';

    expect(component.prop('name')).toEqual(expected);
  })

});
