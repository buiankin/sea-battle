import React, {
  FC,
  memo,
  useReducer,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from 'react';

import {
  createSmartappDebugger,
  createAssistant,
  AssistantAppState,
} from "@sberdevices/assistant-client";

//import  {Link} from 'react-router-dom';

import Constants from './constants';
import Header from './components/header'
import Chat from './components/chat'
import MyBoard from './components/my_board'
import OpponentBoard from './components/opponent_board';

import placeShip from './utils/placeShip';
import placeVarious from './utils/standardShipsSet';


// Это не обязательно, т.к. все в в index на самом деле
//import './App.css';

import { getRandomInt, codeCoordinate, decodeCoordinate} from './utils/Common';
import { reducer } from "./store";

// createGlobalStyle нужен для создания глобальных стилей
import styled, { createGlobalStyle, css } from 'styled-components';

// получаем значение для целевой платформы
import { sberBox } from '@sberdevices/plasma-tokens/typo';
// получаем стилевые объекты для нашего интерфейса
import { body1, headline2 } from '@sberdevices/plasma-tokens';

// получаем тему персонажа
import { lightJoy } from '@sberdevices/plasma-tokens/themes';
// получаем цвета для нашего интерфейса
import { text, background, gradient } from '@sberdevices/plasma-tokens';

import { Button } from '@sberdevices/ui';
import { createArrayTypeNode } from 'typescript';

//import { IconDownload } from '@sberdevices/plasma-icons';



const AppStyled = styled.div`
    padding: 30px;
    ${body1}
`;

// создаем react-компонент c глобальными стилями типографики
const TypoScale = createGlobalStyle(sberBox);

// создаем react-компонент для подложки
const DocStyles = createGlobalStyle`
    /* stylelint-disable-next-line selector-nested-pattern */
    html {
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};

        /** необходимо залить градиентом всю подложку */
        min-height: 100vh;
    }
`;
// создаем react-компонент для персонажа
//const Theme = createGlobalStyle(darkJoy);
const Theme = createGlobalStyle(lightJoy);

// Плазма
//https://plasma.sberdevices.ru/current/?path=/docs/about--page


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




function handleClickOpponentBoard(x: any, y: any) {
  // TODO
  //alert('You fire ' + x + "/" + y);
  //this.state.opponent_board.grid[y][x] = Constants.GRID_VALUE_SHIP_HIT;

  /*

  const alphabetical_coord=this.codeCoordinate(x, y);

  let messages2 = [...this.state.messages];
  messages2.push({text: alphabetical_coord, mine: true});
  this.setState({messages: messages2});

  let fire_registered=false;

  let field=this.state.enemyField[y][x];
  if (field.containsShip)
  {
    // Попали в корабль
    if (!field.shot)
    {
      // До этого в это поле не попадали
      fire_registered=true;
      let newEnemyField=this.state.enemyField.slice();
      newEnemyField[y][x].shot=true;
      let shipId=field.shipId;
      // Проверим, есть ли еще не подбитые его части
      let live_parts=0;
      for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
          if (newEnemyField[y][x].containsShip && newEnemyField[y][x].shipId===shipId)
          {
            if (!newEnemyField[y][x].shot)
              live_parts++;
          }
        }
      }
      // TODO если корабль полностью подбит, рисовать его как-то по-другому
  
      let grid=this.state.opponent_board.grid.slice();
      grid[y][x] = Constants.GRID_VALUE_SHIP_HIT;
      let remaining_hit_points=this.state.opponent_board.remaining_hit_points;
      remaining_hit_points--;
      this.setState({ enemyField: newEnemyField, opponent_board: { ...this.state.opponent_board, grid: grid, remaining_hit_points: remaining_hit_points} });
    } else {
      // Повторное попадание
    }
  } else {
    // Попали в воду
    let grid=this.state.opponent_board.grid.slice();
    if (grid[y][x] === Constants.GRID_VALUE_WATER)
    {
      // До этого туда не стреляли
      fire_registered=true;
      // хотя это бы и не обязательно делать (заполнять enemyField для воды), все равно попадание у нас контролируется по-другому,
      // но для корректности данных лучше так сделать
      let newEnemyField=this.state.enemyField.slice();
      newEnemyField[y][x].shot=true;
      //
      grid[y][x] = Constants.GRID_VALUE_WATER_HIT;
      this.setState({ enemyField: newEnemyField, opponent_board: { ...this.state.opponent_board, grid: grid} });
    }
  }

  //if (fire_registered)
  // this.processEnemyMove();
  */
}



export const App: FC = memo(() => {

  const [note, setNote] = useState("");

  const [gameOver, setGameOver] = useState(false);

  const emptyRow=[Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER,
                  Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER];
  const emptyGrid=[emptyRow,emptyRow,emptyRow,emptyRow,emptyRow,emptyRow,emptyRow,emptyRow,emptyRow,emptyRow];

  const [appState, dispatch] = useReducer(reducer, { notes: [], my_board: {grid: emptyGrid}, myField: [], opponent_board: {grid: emptyGrid, remaining_hit_points:0}, enemyField: []} );

  
  const assistantStateRef = useRef<AssistantAppState>();
  const assistantRef = useRef<ReturnType<typeof createAssistant>>();

  useEffect(() => {

    dispatch({ type: "init"});

    assistantRef.current = initializeAssistant(() => assistantStateRef.current);
    // type='character', character='sber'
    // assistantRef.current.on("data", ({ type, character, action }: any) => {
    assistantRef.current.on("data", ({ action }: any) => {
      if (action) {
        dispatch(action);
        // TODO Тест
        if (action.type==='lets_fire')
        {
          let coord=decodeCoordinate(action.coord_str);
          if (coord)
          {
            // Тут он скажет, что попал
            doneNote("Test!!!!");

        
          }
        }
      }
    });
  }, []);

  // Здесь была передача текущего состояния в смартап
  // (где оно там используется, я пока не увидел, да и не смотрел)
  /*
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
  */

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
    const remaining_hit_points = appState.opponent_board.remaining_hit_points;

    return (
      <div id="opponents_board_container">
        <header>
          <h2>Shooting grid</h2>
        </header>
        <OpponentBoard
          //dispatch={dispatch}
          //gameChannel={gameChannel}
          data={appState.opponent_board}
          //playerId={playerId}
          //currentTurn={currentTurn}
          //onClickBoard={() => dispatch({ type: "add_note", note: "123" })}
          onClickBoard={(x:any, y:any) => dispatch({ type: "lets_fire", note: codeCoordinate(x,y)})}
        />
        <p>Попаданий до победы: {remaining_hit_points}</p>
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
              data={appState.my_board}
            />
          </div>
          {
            _renderOpponentBoard()
          }
        </section>
      </section>
    );

  }

  // done в оригинале
  const doneNote = (title: string) => {
    assistantRef.current?.sendData({ action: { action_id: 'fireHit', parameters: { title } } });
};



  return (
    <AppStyled>
    {/* Используем глобальные react-компоненты один раз */}
    <TypoScale />
    <DocStyles />
    <Theme />
    <Button onClick={() => doneNote("Test!")}>Normal Button</Button>
    <main id="game_show" className="view-container">
      {_renderGameContent()}
      {/*
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
      */}
    </main>
    </AppStyled>
  );
});
