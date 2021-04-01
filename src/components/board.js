import React, {PropTypes} from 'react';
import classnames         from 'classnames';
import Constants from '../constants';
import {letters} from '../constants/messages';
//import { setGame }        from '../../actions/game';

export default class Board extends React.Component {

  constructor(props)
  {
    super(props);
  }

  _renderRows(data, showHidden) {

    // showHidden важно только для opponent_board
    const { grid } = data;

    let rows = [this._buildRowHeader()];

    for (let y = 0; y < 10; y++) {
      let cells = [<div key={`header-${y}`} className="header cell">{y + 1}</div>];

      for (let x = 0; x < 10; x++) {
        //cells.push(this._renderCell(y, x, grid[`${y}${x}`]));
        // 15.02.2021 у нас это не строка 00, 01, 02 и т.д., а двухмерный массив
        cells.push(this._renderCell(y, x, grid[y][x], showHidden));
      }

      rows.push(<div className="row" key={y}>{cells}</div>);
    }
/*
      let rows = [this._buildRowHeader()];

      for (let y = 0; y < 10; y++) {
          let cells = [<div key={`header-${y}`} className="header cell">{y + 1}</div>];

          for (let x = 0; x < 10; x++) {
              cells.push(this._renderCell(y, x, '*'));
          }

          rows.push(<div className="row" key={y}>{cells}</div>);
      }
*/


    return rows;
  }

  _renderCell(y, x, value, showHidden) {
    const key = `${y}${x}`;
    const id = this._cellId(key);
    const classes = this._cellClasses(value, showHidden);

    return (
      <div
        id={this._cellId(key)}
        className={classes}
        key={key}
        onClick={this._handleCellClick(y, x, value)}
        onDoubleClick={(e) => e.preventDefault()}
        onMouseOver={(y,x)=>this._handleCellMouseOver(y, x)}
        onMouseOut={(y,x)=>this._handleCellMouseOut(y, x)}>{this._cellValue(value)}</div>
    );
  }

  _buildRowHeader() {
    let values = [<div key="empty" className="header cell"></div>];

    for (var i = 0; i < 10; ++i) {
      //  values.push(<div key={i} className="header cell">{String.fromCharCode(i + 65)}</div>);
      values.push(<div key={i} className="header cell">{letters[i]}</div>);
    }



    return (
      <div key="col-headers" className="row">
        {values}
      </div>
    );
  }

  render() {
      // 14.02.2012 TODO
    const { data, showHidden } = this.props;
    //if (!data) return false;

    const classes = this._boardClasses();

    return (
      <div className={classes}>
        {this._renderRows(data, showHidden)}
      </div>
    );
  }
}
