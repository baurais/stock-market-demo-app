import {
  TOGGLE_FORM,
  UPDATE_STOCK_SYMBOL,
  UPDATE_SELECTED_TRADE_TYPE,
  UPDATE_PRICE,
  UPDATE_LAST_DIVIDEND,
  UPDATE_PAR_VALUE,
  UPDATE_RESET_DATA,
} from './app.actions';
import {TRADE_TYPES} from './app.config';

const initialState = {
  data: [],
  ui: {
    createTrade: {
      show: false,
      tradeTypes: TRADE_TYPES,
      fields: {
        stockSymbol: '',
        selectedType: (TRADE_TYPES.length ? TRADE_TYPES[0].id : ''),
        price: '',
        lastDividend: '',
        parValue: '',
        timeStamp: null,
      }
    },
    uploadList: {
      selectedCatalogId:'',
      loading: false,
      createNewUpload: undefined,
    }
  }
}

export function data(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_FORM:
      return {
        ...state,
        ui: {
          ...state.ui,
          createTrade: {
            ...state.ui.createTrade,
            show: action.toggle
          }
        }
      }
    case UPDATE_STOCK_SYMBOL:
      return {
        ...state,
        ui: {
          ...state.ui,
          createTrade: {
            ...state.ui.createTrade,
            fields: {
              ...state.ui.createTrade.fields,
              stockSymbol: action.stockSymbol
            }
          }
        }
      }
    case UPDATE_SELECTED_TRADE_TYPE:
      return {
        ...state,
        ui: {
          ...state.ui,
          createTrade: {
            ...state.ui.createTrade,
            fields: {
              ...state.ui.createTrade.fields,
              selectedType: action.selectedType
            }
          }
        }
      }
      case UPDATE_PRICE:
        return {
          ...state,
          ui: {
            ...state.ui,
            createTrade: {
              ...state.ui.createTrade,
              fields: {
                ...state.ui.createTrade.fields,
                price: action.price
              }
            }
          }
        }
      case UPDATE_LAST_DIVIDEND:
        return {
          ...state,
          ui: {
            ...state.ui,
            createTrade: {
              ...state.ui.createTrade,
              fields: {
                ...state.ui.createTrade.fields,
                lastDividend: action.lastDividend
              }
            }
          }
        }
      case UPDATE_PAR_VALUE:
        return {
          ...state,
          ui: {
            ...state.ui,
            createTrade: {
              ...state.ui.createTrade,
              fields: {
                ...state.ui.createTrade.fields,
                parValue: action.parValue
              }
            }
          }
        }
      case UPDATE_RESET_DATA:
        return {
          ...state,
          data: action.tradeList,
          ui: {
            ...state.ui,
            createTrade: {
              ...state.ui.createTrade,
              show: false,
              fields: {
                ...initialState.ui.createTrade.fields,
              }
            }
          }
        }
    default:
      return {
        ...state
      };
  }
}

export default (data);
