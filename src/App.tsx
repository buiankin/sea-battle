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
import { letters } from './constants/messages';
import Header from './components/header'
import Chat from './components/chat'
import MyBoard from './components/my_board'
import OpponentBoard from './components/opponent_board';

import placeShip from './utils/placeShip';
import placeVarious from './utils/standardShipsSet';


// Это не обязательно, т.к. все в в index на самом деле
//import './App.css';

import { getRandomInt } from './utils/Common';
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


function codeCoordinate(x: number, y:number)
{
  return letters[y]+(x+1);
}


function decodeCoordinate(s: string)
{
  let result=null;
  let x=-1;
  let s2=s.trim().toUpperCase();
  if (s2.length===3&&s2.substring(1)==="10")
  {
    x=9;
  } else if (s2.length===2) {
    if ('0123456789'.includes(s2.substring(2)))
      x=parseInt(s2.substring(1))-1;
  }
  switch (s2.substring(0,1))
  {
    case 'А':
      result={y:0, x:x};
      break;
    case 'Б':
      result={y:1, x:x};
      break;
    case 'В':
      result={y:2, x:x};
      break;
    case 'Г':
      result={y:3, x:x};
      break;
    case 'Д':
      result={y:4, x:x};
      break;
    case 'Е':
      result={y:5, x:x};
      break;
    case 'Ж':
      result={y:6, x:x};
      break;
    case 'З':
      result={y:7, x:x};
      break;
    case 'И':
      result={y:8, x:x};
      break;
    case 'К':
      result={y:9, x:x};
      break;
                                                                
  }
  return result;
}

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

  let initial_myField = Array(0);
  let myShips = placeVarious();

  let initial_enemyField = Array(0);
  let enemyShips = placeVarious();


  // первоначальное (пустое) состояние поля
  //for (let i = 0; i < 10; i++) {
  //  initial_myField.push([]);
  //  initial_enemyField.push([]);
  //}

  for (let i = 0; i < 10; i++) {
    let val_in_line = [];
    let enemy_val_in_line = [];

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

    // расставляем стандартный набор кораблей
    myShips.forEach((ship: any) => {
      placeShip(initial_myField, ship)
    });
    enemyShips.forEach((ship0: any) => {
      placeShip(initial_enemyField, ship0)
    });


  let my_grid = [];
  let enemy_grid = [];

  // Заполняем из наших массивов
  let remaining_hit_points = 0;
  for (let y = 0; y < 10; y++) {
    let my_line = [];
    let enemy_line = [];
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

  let initial_my_board = { grid: my_grid };
  let initial_opponent_board = { grid: enemy_grid, remaining_hit_points: 0 };

  initial_opponent_board.remaining_hit_points = remaining_hit_points;

  const [my_board, setMyBoard] = useState(initial_my_board);

  //const [opponent_board, setOpponentBoard] = useState(initial_opponent_board);

  const [appState, dispatch] = useReducer(reducer, { notes: [], opponent_board: initial_opponent_board });



  const assistantStateRef = useRef<AssistantAppState>();
  const assistantRef = useRef<ReturnType<typeof createAssistant>>();

  useEffect(() => {
    assistantRef.current = initializeAssistant(() => assistantStateRef.current);

    assistantRef.current.on("data", ({ action }: any) => {
      if (action) {
        dispatch(action);
        // TODO Тест
        if (action.type==='lets_fire')
        {
          // Тут он скажет, что попал
          // TODO action.coord_str
          doneNote("Test!!!!");
        }
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
