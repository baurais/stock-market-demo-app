import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  toggleForm,
  updateSymbol,
  updateType,
  updatePrice,
  updateDividend,
  updateShares,
} from '../../app/app.actions';
import TradeTypesDropdown from '../../components/tradeTypesDropdown';

const CreateTradeForm = (props) => {
  const {
    stockSymbol,
    price,
    lastDividend,
    parValue
  } = props.formValues;

  const show = props.show;

  const inputValues = [
    stockSymbol,
    price,
    lastDividend,
    parValue
  ];

  const buttonIsEnabled = inputValues
    .every((input) => typeof input !== 'undefined' && input !== null && input !== '');

  return (
    <div>
      <button
        type='button'
        name='btnFormToggle'
        onClick={() => props.handleFormToggle(!show)}
      >Create New Trade {show ? '-' : '+'}</button>
      {
        show &&
        <form onSubmit={(e) => props.handleFormSubmit(e,props.formValues)}>
          <fieldset>
            <label>Stock Symbol</label>
            <input
              type='text'
              value={stockSymbol}
              onChange={(e) => props.handleSymbolChange(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>Trade type</label>
            <TradeTypesDropdown
              onChange={(e) => props.handleTypeChange(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>Price</label>
            <input
              type='number'
              min='0'
              value={price}
              onChange={(e) => props.handlePriceChange(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>Last Dividend</label>
            <input
              type='number'
              min='0'
              value={lastDividend}
              onChange={(e) => props.handleDividendChange(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>Number of shares</label>
            <input
              type='number'
              min='0'
              value={parValue}
              onChange={(e) => props.handleSharesChange(e.target.value)}
            />
          </fieldset>
          <button
            name='btnCreateTrade'
            type='submit'
            disabled={!buttonIsEnabled}>Create Trade</button>
        </form>
    }
    </div>
  );
}

CreateTradeForm.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleFormToggle: PropTypes.func.isRequired,
  handleSymbolChange: PropTypes.func.isRequired,
  handleTypeChange: PropTypes.func.isRequired,
  handlePriceChange: PropTypes.func.isRequired,
  handleDividendChange: PropTypes.func.isRequired,
  handleSharesChange: PropTypes.func.isRequired,
};

export {CreateTradeForm};

const mapStateToProps = (state) => {
  const {
    ui: {
      createTrade: {
        fields: formValues,
        show
      }
    }
  } = state;

  return {
    formValues,
    show
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormToggle: (toggle) => dispatch(toggleForm(toggle)),
    handleSymbolChange: (symbol) => dispatch(updateSymbol(symbol)),
    handleTypeChange: (type) => dispatch(updateType(type)),
    handlePriceChange: (price) => dispatch(updatePrice(price)),
    handleDividendChange: (dividend) => dispatch(updateDividend(dividend)),
    handleSharesChange: (shares) => dispatch(updateShares(shares)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateTradeForm);
