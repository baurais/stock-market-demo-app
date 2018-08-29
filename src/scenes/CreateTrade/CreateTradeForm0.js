import React, { Component } from 'react';
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

class CreateTradeForm extends Component {
  static propTypes = {
    formValues: PropTypes.object.isRequired,
    handleFormToggle: PropTypes.func.isRequired,
    handleSymbolChange: PropTypes.func.isRequired,
    handleTypeChange: PropTypes.func.isRequired,
    handlePriceChange: PropTypes.func.isRequired,
    handleDividendChange: PropTypes.func.isRequired,
    handleSharesChange: PropTypes.func.isRequired,
  };

  render() {
    const {
      stockSymbol,
      price,
      lastDividend,
      parValue
    } = this.props.formValues;

    const show = this.props.show;

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
          onClick={() => this.props.handleFormToggle(!show)}
        >Create New Trade {show ? '-' : '+'}</button>
        {
          show &&
          <form onSubmit={(e) => this.props.handleFormSubmit(e,this.props.formValues)}>
            <fieldset>
              <label>Stock Symbol</label>
              <input
                type='text'
                value={stockSymbol}
                onChange={(e) => this.props.handleSymbolChange(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <label>Trade type</label>
              <TradeTypesDropdown
                onChange={(e) => this.props.handleTypeChange(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <label>Price</label>
              <input
                type='number'
                min='0'
                value={price}
                onChange={(e) => this.props.handlePriceChange(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <label>Last Dividend</label>
              <input
                type='number'
                min='0'
                value={lastDividend}
                onChange={(e) => this.props.handleDividendChange(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <label>Number of shares</label>
              <input
                type='number'
                min='0'
                value={parValue}
                onChange={(e) => this.props.handleSharesChange(e.target.value)}
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
}

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
