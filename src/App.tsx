import React, {
  FC,
  memo,
  useReducer,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  RefObject,
} from 'react';

import {
  createSmartappDebugger,
  createAssistant,
  AssistantAppState,
  AssistantSmartAppData,
  AssistantCharacterType
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
import { ContextApp, initialState, reducer } from "./store";

// createGlobalStyle нужен для создания глобальных стилей
import styled, { createGlobalStyle, css } from 'styled-components';

// получаем значение для целевой платформы
import { sberBox } from '@sberdevices/plasma-tokens/typo';
// получаем стилевые объекты для нашего интерфейса
import { body1, headline2 } from '@sberdevices/plasma-tokens';

// получаем тему персонажа
import { darkEva, darkSber, darkJoy } from '@sberdevices/plasma-tokens/themes';

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
//const Theme = createGlobalStyle(lightJoy);

const ThemeBackgroundEva = createGlobalStyle(darkEva);
const ThemeBackgroundSber = createGlobalStyle(darkSber);
const ThemeBackgroundJoy = createGlobalStyle(darkJoy);

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

export class App extends React.Component<any, any> {

  //assistantRef = React.createRef<ReturnType<typeof createAssistant>>();
  //assistantRef = React.createRef<AssistantSmartAppData>();
  //private assistantRef :RefObject<ReturnType<typeof createAssistant>>;
  private assistant :any = null;
  
  assistantStateRef = React.createRef<AssistantAppState>();
  //assistant: AssistantAppState=null;

  constructor(props:any, state:any) {
    super(props);
    this.state=this.getBoardInitialState();
    this.state={...this.state, 
      character: 'sber', respectfulAppeal: true, 
      enemyTurn: false, gameOver: false, youWin: false,
      showHidden: false
    };

  }

  componentDidMount() {
    // TODO
    try {
      //this.assistant = initializeAssistant(() => this.assistantStateRef.current);
    } catch (error) {
      this.assistant = null;
    }

    // type='character', character='sber'
    this.assistant?.on('data', ({ type, character, navigation, action }: any) => {
      if (character)
      {
        // 'sber' | 'eva' | 'joy';
        this.setState({...this.state, character: character.id, respectfulAppeal: character.id!=='joy'});
      }
      //if (navigation)
      if (action)
      {
        /*
        if (action.type==='lets_fire')
        {
          let coord=decodeCoordinate(action.coord_str);
          if (coord)
          {
          }
        }
        */
       this.myDispatch(action);
      }
  });


  }

  componentDidUpdate(oldProps: any) {
  }
  
  getBoardInitialState()
  {
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
    let initial_opponent_board = { grid: enemy_grid, remaining_hit_points};
  
    return {
      notes: [],
      my_board: initial_my_board,
      myField: initial_myField,
      opponent_board: initial_opponent_board,
      enemyField: initial_enemyField
    };

  }

  // { type: "lets_fire", coord_str: codeCoordinate(x,y)})
  myDispatch(myAction: any)
  {

    if (myAction.type==='show_ships')
    {
      this.setState({...this.state, showHidden: true});
    }

    if (myAction.type==='lets_fire')
    if (this.state.enemyTurn)
    {
      // тут про сессии можно почитать
      // https://developer.sberdevices.ru/docs/ru/developer_tools/ide/JS_API/session_lifetime_control
      this.assistant?.sendData({ action: { action_id: 'myMove'} });
    } else
    {
      //alert(myAction.coord_str);
      let fire_registered=false;
      let coord=decodeCoordinate(myAction.coord_str);
      if (coord)
      {
        let x=coord.x, y=coord.y;

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
            //setState({ enemyField: newEnemyField, opponent_board: { ...appState.opponent_board, grid: grid, remaining_hit_points: remaining_hit_points} });
            if (live_parts>0)
              this.assistant?.sendData({ action: { action_id: 'fireHit', parameters: { coord: myAction.coord_str} } });
            else
              this.assistant?.sendData({ action: { action_id: 'fireDone', parameters: { coord: myAction.coord_str} } });
            if (this.state.opponent_board.remaining_hit_points<=1)
            {
              // игрок выиграл
              this.setState({...this.state,
                opponent_board: {grid: grid, remaining_hit_points: this.state.opponent_board.remaining_hit_points-1},
                enemyField: newEnemyField,
                gameOver: true,
                youWin: true
                });
            } else {
              // просто очередное попадание, ход не переходит
              this.setState({...this.state,
              opponent_board: {grid: grid, remaining_hit_points: this.state.opponent_board.remaining_hit_points-1},
              enemyField: newEnemyField
              });
            }

          } else {
            // Повторное попадание. Ход считаем, что не переходит
            this.assistant?.sendData({ action: { action_id: 'fireAgain', parameters: { coord: myAction.coord_str} } });
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
            //this.setState({ enemyField: newEnemyField, opponent_board: { ...this.state.opponent_board, grid: grid} });
            this.setState({
              ...this.state,
              opponent_board: { ...this.state.opponent_board, grid: grid}, enemyField: newEnemyField,
              enemyTurn: true
            });
          }
          this.assistant?.sendData({ action: { action_id: 'fireMiss', parameters: { coord: myAction.coord_str} } });
        }
      }

      // Теперь он сам стреляет
      // (сделано специально, чтобы в любом случае произошла проверка, чтобы игровой процесс не остановился по какой-нибудь причине)
      setTimeout(() => this.processEnemyMove(), 1200);

    }
  }

  // вернет true, если оппонент попал
  // в этом случае ход не переходит
  fireMyBoard(alphabetical_coord: string)
  {
    const coordinate=decodeCoordinate(alphabetical_coord);
    if (coordinate==null)
      return false;
    const x=coordinate.x;
    const y=coordinate.y;

    let fire_registered=false;

    let field=this.state.myField[y][x];
    if (field.containsShip)
    {
      // Попали в корабль
      if (!field.shot)
      {
        // До этого в это поле не попадали
        fire_registered=true;
        let newEnemyField=this.state.myField.slice();
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
    
        let grid=this.state.my_board.grid.slice();
        grid[y][x] = Constants.GRID_VALUE_SHIP_HIT;
        this.setState({ myField: newEnemyField, my_board: { ...this.state.my_board, grid: grid} });
        return true;
      } else {
        // Повторное попадание
      }
    } else {
      // Попали в воду
      let grid=this.state.my_board.grid.slice();
      if (grid[y][x] === Constants.GRID_VALUE_WATER)
      {
        // До этого туда не стреляли
        fire_registered=true;
        let newEnemyField=this.state.myField.slice();
        newEnemyField[y][x].shot=true;
        grid[y][x] = Constants.GRID_VALUE_WATER_HIT;
        this.setState({ myField: newEnemyField, my_board: { ...this.state.my_board, grid: grid} });
      }
    }
    return false;

  }

  processEnemyMove()
  {
    // только в свой ход
    if (!this.state.enemyTurn)
      return;

    const offsets=[{x:-1,y:-1}, {x:0,y:-1}, {x:1,y:-1},
      {x:-1,y:0}, {x:0,y:0}, {x:1,y:0},
      {x:-1,y:1}, {x:0,y:1}, {x:1,y:1},
    ];

    const offsets4=[{x:0,y:-1},{x:-1,y:0},{x:1,y:0},{x:0,y:1}];

    let field=this.state.myField;
    // Первый проход, ищем точки, где рядом есть с попаданиями
    // они будут иметь признак первичных
    // а уже на втором проходе будет происходить поиск, куда можно в принципе выстрелить
    // поэтому если координата будет иметь признак первичной, но стрелять туда нельзя, она в массив не попадет
    let primary_area=Array.from(Array(10), _ => Array(10).fill(0));
    // если в этой координате подбитый корабль
    // найдем, есть ли не подбитые в 4-х направлениях от него
    // и если есть, то это он сам (т.к. нельзя ставить рядом)
    // Заодно заполним список живых кораблей
    let live_ships=new Set();
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        for (let i=0; i<offsets4.length; i++){
          if (field[y][x].containsShip&&!field[y][x].shot) {
            live_ships.add(field[y][x].shipId);
          }
          let _x=x+offsets4[i].x;
          let _y=y+offsets4[i].y;
          if (_x>=0&&_x<10&&_y>=0&&_y<10&&field[_y][_x].containsShip&&field[_y][_x].shot)
          {
            primary_area[y][x]=1;
            break;
          }
        }
      }
    }

    let primary_targets=[];
    let targets=[];

    // составим массив координат, куда враг может выстрелить
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        // если туда еще не стреляли
        let canFire=true;
        if (!field[y][x].shot)
        {
          // и вблизи нет подбитых (полностью) кораблей
          for (let i=0; i<offsets.length; i++){
            let _x=x+offsets[i].x;
            let _y=y+offsets[i].y;
            if (_x>=0&&_x<10&&_y>=0&&_y<10&&field[_y][_x].containsShip&&field[_y][_x].shot)
            {
              if (!live_ships.has(field[_y][_x].shipId))
              {
                canFire=false;
                break;
              }
            }
          }
          if (canFire)
          {
            targets.push({y:y, x:x});
            if (primary_area[y][x]===1)
              primary_targets.push({y:y, x:x});
          }
        }
      }
    }
    // На всякий случай проверка, что есть куда выстрелить (по идее в этом случае игра уже закончена)
    if (targets.length>0)
    {
      // Координаты выстрела
      let fire_coord=primary_targets.length>0?primary_targets[getRandomInt(0, primary_targets.length-1)]:targets[getRandomInt(0, targets.length-1)];

      let alphabetical_coord=codeCoordinate(fire_coord.x, fire_coord.y);

      //
      //let messages2 = [...this.state.messages];
      //messages2.push({text: alphabetical_coord, mine: false});
      //this.setState({messages: messages2});

      if (this.fireMyBoard(alphabetical_coord))
      {
        // если попал, проверяем, победа это или запускаем следующий ход оппонента
        let playerLivesCount=0;
        for (let y = 0; y < 10; y++) {
          for (let x = 0; x < 10; x++) {
            // если туда еще не стреляли
            if (!field[y][x].shot&&field[y][x].containsShip)
              playerLivesCount++;
          }
        }
        if (playerLivesCount>0)
          setTimeout(() => this.processEnemyMove(), 1200);
        else
          this.setState({...this.state, gameOver: true, youWin: false});
        return;
      }
    }
    // В остальных случаях ход переходит к игроку
    this.setState({...this.state, enemyTurn: false});
  }


  /*

  const [character, setCharacter] = useState('sber' as AssistantCharacterType);

  const [note, setNote] = useState("");

  const [gameOver, setGameOver] = useState(false);

  const [appState, dispatch] = useReducer(reducer, initialState );

  
  const assistantStateRef = useRef<AssistantAppState>();
  const assistantRef = useRef<ReturnType<typeof createAssistant>>();

  useEffect(() => {

    dispatch({ type: "init"});

    assistantRef.current = initializeAssistant(() => assistantStateRef.current);
    // type='character', character='sber'
    assistantRef.current.on('data', ({ type, character, navigation, action }: any) => {
      if (character)
        // 'sber' | 'eva' | 'joy';
        setCharacter(character.id);
      //if (navigation)
      if (action)
      {
        if (action.type==='lets_fire')
        {
          let coord=decodeCoordinate(action.coord_str);
          if (coord)
          {
          }
        }
        dispatch(action);
      }
  });
}, []);
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

  _renderResult() {

    //const { game, playerId, winnerId } = this.props;
    const {youWin} = this.state;

    const message = youWin ? 'Вы победили!' : 'Вы потерпели крушение, сухопутный!';

    //setDocumentTitle(`${message} · #${game.id}`);

    return (
      <div id="game_result">
        <header>
        {/*<Logo/>*/}
          <h1>Игра окончена</h1>
          <p>{message}</p>
        </header>
        {/*<Link to="/">Back to home</Link>*/}
      </div>
    );
  }

  _renderOpponentBoard() {
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
    const remaining_hit_points = this.state.opponent_board.remaining_hit_points;

    return (
      <div id="opponents_board_container">
        <header>
          <h2>Поле для стрельбы</h2>
        </header>
        <OpponentBoard
          //dispatch={dispatch}
          //gameChannel={gameChannel}
          data={this.state.opponent_board}
          showHidden={this.state.showHidden}
          //playerId={playerId}
          //currentTurn={currentTurn}
          //onClickBoard={() => dispatch({ type: "add_note", note: "123" })}
          onClickBoard={(x:any, y:any) => this.myDispatch({ type: "lets_fire", coord_str: codeCoordinate(x,y)})}
        />
        <p>Попаданий до победы: {remaining_hit_points}</p>
      </div>
    );

  }


  // 559x568, 768x400, 959x400, 1920x1080
  _renderGameContent() {
    if (this.state.gameOver) return this._renderResult();

    return (
      <section id="main_section">
        {
          <Header
          //game={GameShowView}
          //playerId={playerId}
          enemyTurn={this.state.enemyTurn}
          respectfulAppeal={this.state.respectfulAppeal}
          >
          </Header>
        }
        <section id="boards_container">
          <div id="my_board_container">
            <header>
              <h2>Свои корабли</h2>
            </header>
            <MyBoard
              //dispatch={dispatch}
              //gameChannel={gameChannel}
              //selectedShip={selectedShip}
              data={this.state.my_board}
            />
          </div>
          {
            this._renderOpponentBoard()
          }
        </section>
      </section>
    );

  }

  // done в оригинале
  //const doneNote = (title: string) => {
  //  assistantRef.current?.sendData({ action: { action_id: 'fireHit', parameters: { title } } });
//};


render() {
  return (
    <AppStyled>
    {/* Используем глобальные react-компоненты один раз */}
    <TypoScale />
    <DocStyles />
    {(() => {
                switch (this.state.character) {
                    case 'sber':
                        return <ThemeBackgroundSber />;
                    case 'eva':
                        return <ThemeBackgroundEva />;
                    case 'joy':
                        return <ThemeBackgroundJoy />;
                    default:
                        return;
                }
            })()}    
    {/*<Theme />*/}
    {/*<Button onClick={() => doneNote("Test!")}>Normal Button</Button>*/}
    <main id="game_show" className="view-container">
      {this._renderGameContent()}
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
}
}

