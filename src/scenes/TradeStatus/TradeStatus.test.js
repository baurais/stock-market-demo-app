import React from 'react';
import { shallow } from 'enzyme';
import { TradeStatus } from './TradeStatus';

describe('TradeStatus component', () => {

  let component;

  const mockProps = {
    tradeItems: [{
      stockSymbol: 'test',
      price: 20,
      lastDividend: 5,
      parValue: 100,
      timeStamp: '2018-08-29T17:30:21.888Z',
    }]
  }

  beforeEach(() => {
    component = shallow(<TradeStatus
      {...mockProps}
    />);
  });

  describe('Wrapper Container', () => {

    it('should have name attribute', () => {
      const expected = 'tradeStatus';
  
      expect(component.prop('name')).toEqual(expected);
    })
  });

});
