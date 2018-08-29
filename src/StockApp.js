import React, {PureComponent} from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './Styles.css';
import app from './app/app.reducer';
import {timeStamp} from './util.js';
import {saveNewTrade} from './app/app.actions';
import CreateTradeForm from './scenes/CreateTrade/CreateTradeForm';
import TradeList from './scenes/ViewTradeList/TradeList';
import TradeStatus from './scenes/TradeStatus/TradeStatus';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  app,
  composeEnhancers(
    applyMiddleware(...middleware)
  ),
);
const mapStateToProps = (state) => {
  const {
    ui: {
      createTrade: {
        fields: formValues,
      }
    }
  } = state;

  return {
    formValues,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveNewTrade: (tradeList) => dispatch(saveNewTrade(tradeList)),
  }
};

class RootApp extends PureComponent {
  static propTypes = {
    formValues: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      tradeList: []
    }
  }

  handleFormSubmit = (e,newTrade) => {
    e.preventDefault();
    newTrade.timeStamp = timeStamp();

    this.setState({
      tradeList: [...this.state.tradeList, newTrade]
    },() => {
      this.props.saveNewTrade(this.state.tradeList);
      NotificationManager.success('Created new trade successfully')
    });
  }

  render() {
    return (
      <div className='app'>
        <NotificationContainer/>
        <h1>Stock Market Demo App</h1>
        <CreateTradeForm handleFormSubmit={this.handleFormSubmit}/>
        <br />
        <TradeList/>
        <br />
        <TradeStatus/>
      </div>
    )
  }
}

class StockApp extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRootApp/>
      </Provider>
    )
  }
}

export default (StockApp);

const ConnectedRootApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootApp);
