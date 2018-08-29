import React from 'react';
import { shallow } from 'enzyme';
import { TradeList } from './TradeList';
import ReactTable from "react-table";

describe('TradeList component', () => {

  let tradeList;
  const mockProps = {
    tradeItems: [{
      stockSymbol: 'test',
      selectedType: 'common',
      price: 20,
      lastDividend: 5,
      parValue: 100,
      timeStamp: '2018-08-29T17:30:21.888Z'
    }]
  }

  beforeEach(() => {
    tradeList = shallow(<TradeList
      {...mockProps}
    />);
  });

  describe('Grid Component', () => {
    it('should render grid on initialisation', () => {
      expect(tradeList
        .find(ReactTable)
        .length
      ).toEqual(1)
    });
  });

});
