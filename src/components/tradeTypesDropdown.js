import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class TradeTypesDropdown extends Component {
  static propTypes = {
    dropdownValues: PropTypes.array.isRequired,
  };

  static defaultProps = {
    dropdownValues: []
  };

  render () {
    const {
      dropdownValues,
      ...rest
    } = this.props;

    return (
     <select
        name="tradeTypes"
        onChange={(e) => this.props.onChange(e.target.value)}
        {...rest}
     >
        {
          dropdownValues.map((tradeItem) => {
            return <option key={tradeItem.id} value={tradeItem.id}>{tradeItem.name}</option>;
          })
        }
     </select>
    )
  }
}

export {TradeTypesDropdown};

const mapStateToProps = (state) => {
  const {
    ui: {
      createTrade: {
        tradeTypes: dropdownValues
      }
    }
  } = state;

  return {
    dropdownValues
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TradeTypesDropdown);
