import React, {
  FC,
  memo,
  useReducer,
  useState,
  useRef,
  useEffect,
} from 'react';

import {
  createSmartappDebugger,
  createAssistant,
  AssistantAppState,
} from "@sberdevices/assistant-client";

//import  {Link} from 'react-router-dom';

import Constants from './constants';
import {letters} from './constants/messages';
import Header from './components/header'
import Chat from './components/chat'
import MyBoard from './components/my_board'
import OpponentBoard from './components/opponent_board';

import placeShip from './utils/placeShip';
import placeVarious from './utils/standardShipsSet';


import './App.css';
import { getRandomInt } from './utils/Common';
import { reducer } from "./store";


const initializeAssistant = (getState: any) => {
  console.log('process.env.NODE_ENV=');
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }

  return createAssistant({ getState });
};

export const App: FC = memo(() => {
  const [appState, dispatch] = useReducer(reducer, { notes: [] });

  const [note, setNote] = useState("");

  const [gameOver, setGameOver] = useState(false);

  let initial_myField = [];
  let myShips = placeVarious();

  let initial_enemyField = [];
  let initial_enemyShips = placeVarious();


  // первоначальное (пустое) состояние поля
  //for (let i = 0; i < 10; i++) {
  //  initial_myField.push([]);
  //  initial_enemyField.push([]);
  //}

  for (let i = 0; i < 10; i++) {
    let val_in_line=[];
    let enemy_val_in_line=[];

    for (let j = 0; j < 10; j++) {
      val_in_line.push({
        x: j,
        y: i,
        containsShip: false,
        shot: false,
        isShipVisible: false,
        shipId: null,
      });

      enemy_val_in_line.push({
        x: j,
        y: i,
        containsShip: false,
        shot: false,
        isShipVisible: false,
        shipId: null,
      });
    }

    initial_myField.push(val_in_line);
    initial_enemyField.push(enemy_val_in_line);
  }

  let my_grid=[];
  let enemy_grid=[];

    // Заполняем из наших массивов
    let remaining_hit_points=0;
    for (let y = 0; y < 10; y++) {
      let my_line=[];
      let enemy_line=[];
      for (let x = 0; x < 10; x++) {
        // Наши корабли
        let fieldVal = initial_myField[y][x];
        let fieldVal_0 = fieldVal.shot ? Constants.GRID_VALUE_WATER_HIT : Constants.GRID_VALUE_WATER;
        if (fieldVal.containsShip)
          fieldVal_0 = fieldVal.shot ? Constants.GRID_VALUE_SHIP_HIT : Constants.GRID_VALUE_SHIP;
        my_line.push(fieldVal_0);
        // Корабли оппонента
        fieldVal = initial_enemyField[y][x];
        fieldVal_0 = fieldVal.shot ? Constants.GRID_VALUE_WATER_HIT : Constants.GRID_VALUE_WATER;
        if (fieldVal.containsShip) {
          fieldVal_0 = fieldVal.shot ? Constants.GRID_VALUE_SHIP_HIT : Constants.GRID_VALUE_SHIP;
          remaining_hit_points++;
        }
        enemy_line.push(fieldVal_0);
      }

      my_grid.push(my_line);
      enemy_grid.push(enemy_line);
  
    }

    let initial_my_board = { grid:my_grid };
    let initial_opponent_board = { grid: enemy_grid, remaining_hit_points: 0 };

    initial_opponent_board.remaining_hit_points=remaining_hit_points;

  const [my_board, setMyBoard] = useState(initial_my_board);
  

  const assistantStateRef = useRef<AssistantAppState>();
  const assistantRef = useRef<ReturnType<typeof createAssistant>>();

  useEffect(() => {
    assistantRef.current = initializeAssistant(() => assistantStateRef.current);

    assistantRef.current.on("data", ({ action }: any) => {
      if (action) {
        dispatch(action);
      }
    });
  }, []);

  useEffect(() => {
    assistantStateRef.current = {
      item_selector: {
        items: appState.notes.map(({ id, title }, index) => ({
          number: index + 1,
          id,
          title,
        })),
      },
    };
  }, [appState]);

  function _renderResult() {

    //const { game, playerId, winnerId } = this.props;

    let playerId = 1;
    let winnerId = 2;

    const message = playerId === winnerId ? 'Yo Ho Ho, victory is yours!' : 'You got wrecked, landlubber!';
    const twitterMessage = playerId === winnerId ? 'Yo Ho Ho, I won a battle at Phoenix Battleship' : 'I got wrecked at Phoenix Battleship';

    //setDocumentTitle(`${message} · #${game.id}`);

    return (
      <div id="game_result">
        <header>
          {/*<Logo/>*/}
          <h1>Game over</h1>
          <p>{message}</p>
          <a
            href={`https://twitter.com/intent/tweet?url=https://phoenix-battleship.herokuapp.com&button_hashtag=myelixirstatus&text=${twitterMessage}`}
            className="twitter-hashtag-button"><i className="fa fa-twitter" /> Share result</a>
        </header>
        {/*<Link to="/">Back to home</Link>*/}
      </div>
    );
  }

  function _renderOpponentBoard() {
    //const { dispatch, game, gameChannel, playerId, currentTurn, readyForBattle } = this.props;

    /*
    if (!readyForBattle) return (
        <Instructions
            readyForBattle={readyForBattle}
            playerIsAttacker={playerId === game.attacker}/>
    );
     */

    //const opponentBoard = this.state.opponent_board_0;
    // а вот через data к ним можно бы обратиться только внутри OpponentBoard
    const remaining_hit_points = 10;//this.state.opponent_board.remaining_hit_points;

    return (
      <div id="opponents_board_container">
        <header>
          <h2>Shooting grid</h2>
        </header>
      </div>
    );
  }


  function _renderGameContent() {
    if (gameOver) return _renderResult();

    return (
      <section id="main_section">
        {
          <Header
          //game={GameShowView}
          //playerId={playerId}
          //currentTurn={currentTurn}
          >
          </Header>
        }
        <section id="boards_container">
          <div id="my_board_container">
            <header>
              <h2>Your ships</h2>
            </header>
            <MyBoard
              //dispatch={dispatch}
              //gameChannel={gameChannel}
              //selectedShip={selectedShip}
              data={my_board}
            />
          </div>
          {
            _renderOpponentBoard()
          }
        </section>
      </section>
    );

  }  


  return (
    <main id="game_show" className="view-container">
      {_renderGameContent()}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch({ type: "add_note", note });
          setNote("");
        }}
      >
        <input
          className="add-note"
          type="text"
          placeholder="Add Note"
          value={note}
          onChange={({ target: { value } }) => setNote(value)}
          required
          autoFocus
        />
      </form>
      <ul className="notes">
        {appState.notes.map((note, index) => (
          <li className="note" key={note.id}>
            <span>
              <span style={{ fontWeight: "bold" }}>{index + 1}. </span>
              <span
                style={{
                  textDecorationLine: note.completed ? "line-through" : "none",
                }}
              >
                {note.title}
              </span>
            </span>
            <input
              className="done-note"
              type="checkbox"
              checked={note.completed}
              onChange={() => dispatch({ type: "done_note", id: note.id })}
            />
          </li>
        ))}
      </ul>
    </main>
  );
});
