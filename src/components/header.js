import React, {Component} from 'react';
import PropTypes from 'prop-types'
//import { setDocumentTitle }   from '../../utils';
//import MyBoard from "./my_board";

export default class Header extends React.Component {

  componentDidUpdate() {
    //const { game } = this.props;
    // TODO
    //setDocumentTitle(`${this._titleText()} · #${game.id}`);
  }

  _titleText() {
    //const { game, playerId, currentTurn, my_board, opponents_board } = this.props;
    //const { readyForBattle } = game;
    //let readyForBattle=true;
    const { enemyTurn, respectfulAppeal } = this.props;

    /*

    if (!my_board.ready) {
      return 'Place your ships';
    } else if (!opponents_board || !opponents_board.ready) {
      return 'Waiting for opponent';
    } else if (currentTurn && currentTurn === playerId) {
      return 'Your turn!';
    } else if (currentTurn && currentTurn != playerId) {
      return 'Your opponent\'s turn!';
    } else {
      return 'Let the battle begin';
    }
     */
    if (enemyTurn===true) {
      return respectfulAppeal===false?'Ход твоего оппонента!':'Ход Вашего оппонента!';
    } else {
      return respectfulAppeal===false?'Твой ход!':'Ваш ход!';
    }
    
  }

  _messageText() {
    const { enemyTurn, respectfulAppeal } = this.props;
    /*
    const { game, playerId, currentTurn } = this.props;
    const { my_board, opponents_board, readyForBattle } = game;

    if (!my_board.ready) {
      return 'Use the instructions below';
    } else if (!opponents_board || !opponents_board.ready) {
      return 'Battle will start as soon as your opponent is ready';
    } else if (currentTurn && currentTurn === playerId) {
      return 'Click on your shooting grid to open fire!';
    } else if (currentTurn && currentTurn != playerId) {
      return 'Wait for your opponent to shoot...';
    } else {
      return 'Let the battle begin';
    }
     */
    if (enemyTurn===true) {
      return respectfulAppeal===false?'Ход твоего оппонента!':'Ход Вашего оппонента!';
    } else {
      return respectfulAppeal===false?'Твой ход!':'Ваш ход!';
    }
  }

  render() {
    return (
      <header id="game_header">
        <h1>{this._titleText()}</h1>
        {/*<p>{this._messageText()}</p>*/}
      </header>
    );
  }
}
