import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDividendYield, getPERatio, getGeometricMean } from '../../util.js';

const TradeStatus = (props) => {
  if(!props.tradeItems.length) {
    return '';
  }

  return (
    <div name="tradeStatus">
      <hr />
      <h2>Trade Status</h2>
      <div><strong>Dividend Yield</strong> - { getDividendYield(props.tradeItems) }</div>
      <div><strong>P/E Ratio</strong> - { getPERatio(props.tradeItems) }</div>
      <div><strong>Geometric Mean</strong> - { getGeometricMean(props.tradeItems) }</div>
    </div>
  )
};

TradeStatus.propTypes = {
  tradeItems: PropTypes.array.isRequired,
};

export {TradeStatus};

const mapStateToProps = (state) => {
  const {
    data: tradeItems
  } = state;

  return {
    tradeItems,
  }
};

export default connect(
  mapStateToProps,
)(TradeStatus);
