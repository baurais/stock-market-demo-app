import React from 'react';
import PropTypes from 'prop-types';

const LastDividendColumn = (props) => {
  return (
    <div name="lastDividend">
      {props.rowValue}
    </div>
  )
};

LastDividendColumn.propTypes = {
  rowValue: PropTypes.string.isRequired,
};

export default LastDividendColumn;
