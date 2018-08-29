export const TOGGLE_FORM = 'TOGGLE_FORM';
export const UPDATE_STOCK_SYMBOL = 'UPDATE_STOCK_SYMBOL';
export const UPDATE_SELECTED_TRADE_TYPE = 'UPDATE_SELECTED_TRADE_TYPE';
export const UPDATE_PRICE = 'UPDATE_PRICE';
export const UPDATE_LAST_DIVIDEND = 'UPDATE_LAST_DIVIDEND';
export const UPDATE_PAR_VALUE = 'UPDATE_PAR_VALUE';
export const UPDATE_RESET_DATA = 'UPDATE_RESET_DATA';

export const toggleForm = (toggle) => ({
  type: TOGGLE_FORM,
  toggle,
});

export const updateSymbol = (stockSymbol) => ({
  type: UPDATE_STOCK_SYMBOL,
  stockSymbol,
});

export const updateType = (selectedType) => ({
  type: UPDATE_SELECTED_TRADE_TYPE,
  selectedType,
});

export const updatePrice = (price) => ({
  type: UPDATE_PRICE,
  price,
});

export const updateDividend = (lastDividend) => ({
  type: UPDATE_LAST_DIVIDEND,
  lastDividend,
});

export const updateShares = (parValue) => ({
  type: UPDATE_PAR_VALUE,
  parValue,
});

export const saveNewTrade = (tradeList) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_RESET_DATA,
      tradeList
    });
  } catch (e) {
    console.log(e);
  }
}
