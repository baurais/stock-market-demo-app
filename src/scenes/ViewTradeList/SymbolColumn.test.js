import React from 'react';
import {shallow} from 'enzyme';
import SymbolColumn from './SymbolColumn';

describe('Par Value component', () => {
  let component;
  const mockProps = {
    rowValue: "TON"
  }

  beforeEach(() => {
    component = shallow(<SymbolColumn
      {...mockProps}
    />);
  });

  it('should display symbol value for each trade item', () => {
    const expected = mockProps.rowValue;

    expect(component.html()).toEqual(expect.stringContaining(expected));
  });

  it('should have name attribute', () => {
    const expected = 'symbol';

    expect(component.prop('name')).toEqual(expected);
  })

});
