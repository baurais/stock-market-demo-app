import React from 'react';
import { shallow, mount } from 'enzyme';
import { CreateTradeForm } from './CreateTradeForm';

describe('CreateTradeForm component', () => {

  let component,
      handleFormToggleMock,
      handleSymbolChangeMock,
      handleTypeChangeMock,
      handlePriceChangeMock,
      handleDividendChangeMock,
      handleSharesChangeMock;

  const mockProps = {
    'formValues': {
      'stockSymbol': '',
      'selectedType': '',
      'price': '',
      'lastDividend': '',
      'parValue': '',
      'timeStamp': '2018-08-29T17:30:21.888Z'
    }
  }

  beforeEach(() => {
    handleFormToggleMock = jest.fn(),
    handleSymbolChangeMock = jest.fn(),
    handleTypeChangeMock = jest.fn(),
    handlePriceChangeMock = jest.fn(),
    handleDividendChangeMock = jest.fn(),
    handleSharesChangeMock = jest.fn();

    component = shallow(<CreateTradeForm
      {...mockProps}
      show={false}
      handleFormToggle={handleFormToggleMock}
      handleSymbolChange={handleSymbolChangeMock}
      handleTypeChange={handleTypeChangeMock}
      handlePriceChange={handlePriceChangeMock}
      handleDividendChange={handleDividendChangeMock}
      handleSharesChange={handleSharesChangeMock}
    />);
  });

  describe('Toggle behaviour', () => {
    it('should invoke toggle method on click', () => {
      component
        .find('button')
        .simulate('click');

      expect(handleFormToggleMock).toHaveBeenCalled();
    });

    it('should display form toggle is true', () => {
      component = shallow(<CreateTradeForm
        {...mockProps}
        show={true}
        handleFormToggle={handleFormToggleMock}
        handleSymbolChange={handleSymbolChangeMock}
        handleTypeChange={handleTypeChangeMock}
        handlePriceChange={handlePriceChangeMock}
        handleDividendChange={handleDividendChangeMock}
        handleSharesChange={handleSharesChangeMock}
      />);

      expect(component
        .find('button[name=\'btnCreateTrade\']')
        .length
      ).toEqual(1);
    });
  });

  describe('Create New Trade Button', () => {
    it('should be disabled by default', () => {
      component = shallow(<CreateTradeForm
        {...mockProps}
        show={true}
        handleFormToggle={handleFormToggleMock}
        handleSymbolChange={handleSymbolChangeMock}
        handleTypeChange={handleTypeChangeMock}
        handlePriceChange={handlePriceChangeMock}
        handleDividendChange={handleDividendChangeMock}
        handleSharesChange={handleSharesChangeMock}
      />);

      const buttonIsDisabled = () => component
        .find('button[name=\'btnCreateTrade\']')
        .props()
        .disabled === true;

      expect(buttonIsDisabled()).toBeTruthy();
    });

    it('should be enabled when all fields have values', () => {
      const fields = {
        'stockSymbol': 'test',
        'selectedType': 'test',
        'price': 'test',
        'lastDividend': 'test',
        'parValue': 'test',
        'timeStamp': '2018-08-29T17:30:21.888Z'
      };

      const buttonIsDisabled = () => component
        .find('button[name=\'btnCreateTrade\']')
        .props()
        .disabled !== true;

      component = shallow(<CreateTradeForm
        {...mockProps}
        show={true}
        handleFormToggle={handleFormToggleMock}
        handleSymbolChange={handleSymbolChangeMock}
        handleTypeChange={handleTypeChangeMock}
        handlePriceChange={handlePriceChangeMock}
        handleDividendChange={handleDividendChangeMock}
        handleSharesChange={handleSharesChangeMock}
        {...fields}
      />);
      expect(buttonIsDisabled()).toBeFalsy();
    });

  });
});
