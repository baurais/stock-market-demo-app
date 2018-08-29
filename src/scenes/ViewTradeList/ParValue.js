import React from 'react';
import PropTypes from 'prop-types';

const ParValueColumn = (props) => {
  return (
    <div name="parValue">
      {props.rowValue}
    </div>
  )
};

ParValueColumn.propTypes = {
  rowValue: PropTypes.string.isRequired,
};

export default ParValueColumn;
