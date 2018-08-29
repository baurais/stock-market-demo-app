import React from 'react';
import PropTypes from 'prop-types';

const TradeTypeColumn = (props) => {
  return (
    <div name="tradeType">
      {props.rowValue}
    </div>
  )
};

TradeTypeColumn.propTypes = {
  rowValue: PropTypes.string.isRequired,
};

export default TradeTypeColumn;
