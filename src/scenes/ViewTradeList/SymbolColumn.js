import React from 'react';
import PropTypes from 'prop-types';

const SymbolColumn = (props) => {
  return (
    <div name="symbol">
      {props.rowValue}
    </div>
  )
};

SymbolColumn.propTypes = {
  rowValue: PropTypes.string.isRequired,
};

export default SymbolColumn;
