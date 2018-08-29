import React, {PureComponent} from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactTable from "react-table";
import SymbolColumn from './SymbolColumn';
import TradeTypeColumn from './TradeType';
import LastDividendColumn from './LastDividend';
import ParValueColumn from './ParValue';
import {sortDatabyTimeStamp} from '../../util.js';

const columns = [{
  Header: 'Stock Symbol',
  accessor: 'stockSymbol',
  Cell: row => (
    <SymbolColumn
      rowValue={row.original.stockSymbol}
    />
  )
}, {
  Header: 'Trade Type',
  accessor: 'selectedType',
  Cell: row => (
    <TradeTypeColumn
      rowValue={row.original.selectedType}
    />
  )
}, {
  Header: 'Last Dividend',
  accessor: 'lastDividend',
  Cell: row => (
    <LastDividendColumn
      rowValue={row.original.lastDividend}
    />
  )
}, {
  Header: 'Par Value',
  accessor: 'parValue',
  Cell: row => (
    <ParValueColumn
      rowValue={row.original.parValue}
    />
  )
}]

class TradeList extends PureComponent {
  static propTypes = {
    tradeItems: PropTypes.array.isRequired
  };

  static defaultProps = {
    tradeItems: []
  };

  render() {
    return(
      <ReactTable
        data={this.props.tradeItems.sort(sortDatabyTimeStamp).reverse()}
        columns={columns}
        showPagination={false}
        NoDataComponent={
          this.props.tradeItems.length
          ? null
          : () => {return <div className="rt-noData">No Data</div>}
        }
        minRows={1}
        className="-striped -highlight"
      />
    )
  }
}

export {TradeList};

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
)(TradeList);
