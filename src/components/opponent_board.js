import React, {PropTypes} from 'react';
import classnames         from 'classnames';
import Board              from './board';
import Constants          from '../constants';
//import { setGame }        from '../../actions/game';

export default class OpponentBoard extends Board {

  constructor(props) {
    super(props);

  }

  _handleCellClick(y, x, value) {
    //const { gameChannel, currentTurn, playerId, dispatch } = this.props;

    //if (currentTurn !== playerId) return false;

    //const key = `${y}${x}`;

    // Это было в actions
    //function setGame(game) {
    //  return {
    //    type: Constants.GAME_SET_GAME,
    //    game: game,
    //  };
    //}

    return (e) => { 
      this.props.onClickBoard(x, y);
    }


    //return (e) => {
    //  if (value != Constants.GRID_VALUE_WATER) return false;

      //gameChannel.push('game:shoot', { y: y, x: x })
      //.receive('ok', (payload) => {
      //  dispatch(setGame(payload.game));
      //})
      //.receive('error', (payload) => console.log(payload));


    //};
  }

  _handleCellMouseOver(y, x) {
    return false;
  }

  _cellValue(value) {
    return '';
  }

  _boardClasses() {
    const { playerId, currentTurn } = this.props;

    return classnames({
      grid: true,
      pointer: playerId === currentTurn,
    });
  }

  _cellClasses(value) {
    return classnames({
      cell: true,
      // TODO только во время отладки
      ship: value === Constants.GRID_VALUE_SHIP,
      //
      hit: value === Constants.GRID_VALUE_SHIP_HIT,
      'water-hit': value === Constants.GRID_VALUE_WATER_HIT,
    });
  }

  _cellId(ref) {
    return false;
  }

  _handleCellMouseOut(e) {
    return false;
  }
}
