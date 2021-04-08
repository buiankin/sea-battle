import Constants from './constants';
import { codeCoordinate, decodeCoordinate} from './utils/Common';

import MyBoard from './components/my_board'
import OpponentBoard from './components/opponent_board';

import placeShip from './utils/placeShip';
import placeVarious from './utils/standardShipsSet';

function getBoardInitialState()
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
    //notes: [],

    my_board: initial_my_board,
    myField: initial_myField,
    opponent_board: initial_opponent_board,
    enemyField: initial_enemyField
    
  };

}

function getFullInitialState()
{
  let boardInitialState=getBoardInitialState();
  let state={
    actionsToSend: [],
    debugLastUserTalkCoord: "",


    my_board: boardInitialState.my_board,
    myField: boardInitialState.myField,
    opponent_board: boardInitialState.opponent_board,
    enemyField: boardInitialState.enemyField,
    character: 'sber',
    respectfulAppeal: true, 
    enemyTurnForce: 0,
    enemyTurn: false, gameOver: false, youWin: false,
    // TODO true, если надо сразу видеть
    showHidden: false
  };
  return state;
}


const emptyRow=[Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER,
  Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER, Constants.GRID_VALUE_WATER];
const emptyGrid=[emptyRow,emptyRow,emptyRow,emptyRow,emptyRow,emptyRow,emptyRow,emptyRow,emptyRow,emptyRow];

// важно - тот же самый тип должен быть у getFullInitialState()
export const initialState = { actionsToSend: [], debugLastUserTalkCoord: "", my_board: {grid: emptyGrid}, myField: [], opponent_board: {grid: emptyGrid, remaining_hit_points:0}, enemyField: [],
  character: 'sber',
  respectfulAppeal: true, 
  enemyTurnForce: 0,
  enemyTurn: false, gameOver: false, youWin: false,
  showHidden: false
};


/*
type Note = {
  id: string;
  title: string;
  completed: boolean;
};
*/

type ActionToSend = {
  id: string;
  Action: { action: any };
}

type State = {
  //notes: Array<Note>;
  actionsToSend: Array<ActionToSend>,
  debugLastUserTalkCoord: string,

  my_board: { grid: string[][]},
  myField: any[],
  opponent_board: { grid: string[][], remaining_hit_points: number},
  enemyField: any[],

  character: string,
  respectfulAppeal: boolean, 
  enemyTurnForce: number, enemyTurn: boolean, gameOver: boolean, youWin: boolean,
  showHidden: boolean
};

type Action =
  | {
    type: "init";
  }
  | {
    type: "show_ships";
  }
  | {
    type: "character";
    character_id: string;
    }
  | {
    type: "game_over_lost";
    }
  | {
    type: "game_replay";
    }
  | {
    type: "clear_action";
    id: string;
    }
  | {
    type: "enemy_fire";
    coord_str: string;
  }
  | {
    type: "lets_fire";
    coord_str: string;
  };

  /*
  | {
      type: "add_note";
      note: string;
    }
  | {
      type: "done_note";
      id: string;
    }
  | {
      type: "delete_note";
      id: string;
    };
    */

export const reducer = (state: State, action: Action) => {

  switch (action.type) {
      /*
    case "init":
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
      */

    case "init":
      return getFullInitialState();


    case "character":
      return {
        ...state,
        character: action.character_id, respectfulAppeal: action.character_id!=='joy'
      }
  
    case "show_ships":
      return {
        ...state,
        showHidden: true
      }

    case "game_over_lost":
      return {
        ...state,
        gameOver: true, youWin: false
      }

    case "game_replay":
      return {
        ...getFullInitialState(),
        character: state.character,
        respectfulAppeal: state.respectfulAppeal
      }

    case "clear_action":
      return {
        ...state,
        actionsToSend: []
      }

    case "enemy_fire":
    {
      let actionsToSend=state.actionsToSend.slice();

      let fire_registered=false;
      let coord=decodeCoordinate(action.coord_str);
      if (coord)
      {
        let x=coord.x, y=coord.y;

        let field=state.myField[y][x];
        if (field.containsShip)
        {
          // Попали в корабль
          if (!field.shot)
          {
            // До этого в это поле не попадали
            fire_registered=true;
            let newMyField=state.myField.slice();
            newMyField[y]=newMyField[y].slice();
            newMyField[y][x]={...newMyField[y][x], shot:true};
            let shipId=field.shipId;
            // Проверим, есть ли еще не подбитые его части
            let live_parts=0;
            for (let y = 0; y < 10; y++) {
              for (let x = 0; x < 10; x++) {
                if (newMyField[y][x].containsShip && newMyField[y][x].shipId===shipId)
                {
                  if (!newMyField[y][x].shot)
                    live_parts++;
                }
              }
            }
            // TODO если корабль полностью подбит, рисовать его как-то по-другому
        
            let grid=state.my_board.grid.slice();
            grid[y]=state.my_board.grid[y].slice();
            grid[y][x] = Constants.GRID_VALUE_SHIP_HIT;
            if (live_parts>0)
              actionsToSend.push({id:'0', Action: { action: { action_id: 'enemy_fire_hit', parameters: { coord: action.coord_str} } }});
            else
              actionsToSend.push({id:'0', Action: { action: { action_id: 'enemy_fire_down', parameters: { coord: action.coord_str} } }});

            // посчитаем, сколько у игрока осталось кораблей
            let playerLivesCount=0;
            for (let y = 0; y < 10; y++) {
              for (let x = 0; x < 10; x++) {
                // если туда еще не стреляли
                if (!newMyField[y][x].shot&&newMyField[y][x].containsShip)
                  playerLivesCount++;
              }
            }
           
            if (playerLivesCount>0)
            {
              // TODO еще один выстрел
            //  setTimeout(() => processEnemyMove(), 1200);

              // просто очередное попадание, ход не переходит
              return {...state,
                my_board: {grid: grid},
                myField: newMyField,
                actionsToSend: actionsToSend,
                // а это сделано для того, чтобы вызвалась проверка enemyTurn
                enemyTurnForce: state.enemyTurnForce+1
                }
  
            } else
            {
              // Игра окончена
              //setAppState({...appState, gameOver: true, youWin: false});
              actionsToSend.push({id:'0', Action: { action: { action_id: 'gameOverLost', parameters: {} } }});
              // игрок выиграл
              return {...state,
                my_board: {grid: grid},
                myField: newMyField,
                gameOver: true,
                youWin: false,
                actionsToSend: actionsToSend
                }
            }

          } else {
            // Повторное попадание. Ход считаем, что не переходит
            //actionsToSend.push({id:'0', Action: { action: { action_id: 'fireAgain', parameters: { coord: action.coord_str} } }});
          }
        } else {
          actionsToSend.push({id:'0', Action: { action: { action_id: 'enemy_fire_miss', parameters: { coord: action.coord_str} } }});
          // Попали в воду
          let grid=state.my_board.grid.slice();
          grid[y]=state.my_board.grid[y].slice();
          if (grid[y][x] === Constants.GRID_VALUE_WATER)
          {
            // До этого туда не стреляли
            fire_registered=true;
            // хотя это бы и не обязательно делать (заполнять enemyField для воды), все равно попадание у нас контролируется по-другому,
            // но для корректности данных лучше так сделать
            let newMyField=state.myField.slice();
            newMyField[y]=newMyField[y].slice();
            newMyField[y][x]={...newMyField[y][x], shot:true};
            //
            grid[y][x] = Constants.GRID_VALUE_WATER_HIT;
            //this.setState({ enemyField: newEnemyField, opponent_board: { ...this.state.opponent_board, grid: grid} });
            return {...state,
              my_board: { ...state.my_board, grid: grid}, myField: newMyField,
              enemyTurn: false,
              actionsToSend: actionsToSend
            }
          }
        }
      }
  
      return {
        ...state,
        actionsToSend: actionsToSend
      }
    }

    case "lets_fire":
    {
      let actionsToSend=state.actionsToSend.slice();
      if (state.enemyTurn)
      {
        // тут про сессии можно почитать
        // https://developer.sberdevices.ru/docs/ru/developer_tools/ide/JS_API/session_lifetime_control
        actionsToSend.push({id:'0', Action: { action: { action_id: 'myMove'} }});
        // и на всякий случай защита от зависания таймера
        return {
          ...state,
          actionsToSend: actionsToSend,
          enemyTurnForce: state.enemyTurnForce+1
        }
        
      } else
      {
        //alert(myAction.coord_str);
        let fire_registered=false;
        let coord=decodeCoordinate(action.coord_str);
        if (coord)
        {
          let x=coord.x, y=coord.y;
  
          let field=state.enemyField[y][x];
          if (field.containsShip)
          {
            // Попали в корабль
            if (!field.shot)
            {
              // До этого в это поле не попадали
              fire_registered=true;
              let newEnemyField=state.enemyField.slice();
              newEnemyField[y]=newEnemyField[y].slice();
              newEnemyField[y][x]={...newEnemyField[y][x], shot:true};
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
          
              let grid=state.opponent_board.grid.slice();
              grid[y]=state.opponent_board.grid[y].slice();
              grid[y][x] = Constants.GRID_VALUE_SHIP_HIT;
              if (live_parts>0)
                actionsToSend.push({id:'0', Action: { action: { action_id: 'fireHit', parameters: { coord: action.coord_str} } }});
              else
                actionsToSend.push({id:'0', Action: { action: { action_id: 'fireDone', parameters: { coord: action.coord_str} } }});
              if (state.opponent_board.remaining_hit_points<=1)
              {
                actionsToSend.push({id:'0', Action: { action: { action_id: 'gameOverWin', parameters: {} } }});
                // игрок выиграл
                return {...state,
                  opponent_board: {grid: grid, remaining_hit_points: state.opponent_board.remaining_hit_points-1},
                  enemyField: newEnemyField,
                  gameOver: true,
                  youWin: true,
                  actionsToSend: actionsToSend
                  }
              } else {
                // просто очередное попадание, ход не переходит
                return {...state,
                opponent_board: {grid: grid, remaining_hit_points: state.opponent_board.remaining_hit_points-1},
                enemyField: newEnemyField,
                actionsToSend: actionsToSend,
                debugLastUserTalkCoord: action.coord_str                
                }
              }
  
            } else {
              // Повторное попадание. Ход считаем, что не переходит
              actionsToSend.push({id:'0', Action: { action: { action_id: 'fireAgain', parameters: { coord: action.coord_str} } }});
            }
          } else {
            // Попали в воду
            let grid=state.opponent_board.grid.slice();
            grid[y]=state.opponent_board.grid[y].slice();
            if (grid[y][x] === Constants.GRID_VALUE_WATER)
            {
              // До этого туда не стреляли
              fire_registered=true;
              // хотя это бы и не обязательно делать (заполнять enemyField для воды), все равно попадание у нас контролируется по-другому,
              // но для корректности данных лучше так сделать
              let newEnemyField=state.enemyField.slice();
              newEnemyField[y]=newEnemyField[y].slice();
              newEnemyField[y][x]={...newEnemyField[y][x], shot:true};
              //
              grid[y][x] = Constants.GRID_VALUE_WATER_HIT;
              //this.setState({ enemyField: newEnemyField, opponent_board: { ...this.state.opponent_board, grid: grid} });
              actionsToSend.push({id:'0', Action: { action: { action_id: 'fireMiss', parameters: { coord: action.coord_str} } }});

              return {...state,
                actionsToSend: actionsToSend,
                debugLastUserTalkCoord: action.coord_str,
                opponent_board: { ...state.opponent_board, grid: grid}, enemyField: newEnemyField,
                enemyTurn: true
              }
            }
          }
        }
      }
      return {
        ...state,
        actionsToSend: actionsToSend,
        debugLastUserTalkCoord: action.coord_str
      }
    }
      
  

      /*
      let fire_registered=false;
      let coord=decodeCoordinate(action.coord_str);
      if (coord)
      {
        let x=coord.x, y=coord.y;

        let field=state.enemyField[y][x];
        if (field.containsShip)
        {
          // Попали в корабль
          if (!field.shot)
          {
            // До этого в это поле не попадали
            fire_registered=true;
            let newEnemyField=state.enemyField.slice();
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
        
            let grid=state.opponent_board.grid.slice();
            grid[y][x] = Constants.GRID_VALUE_SHIP_HIT;
            //setState({ enemyField: newEnemyField, opponent_board: { ...appState.opponent_board, grid: grid, remaining_hit_points: remaining_hit_points} });
            let newState={...state,
            opponent_board: {grid: grid, remaining_hit_points: state.opponent_board.remaining_hit_points-1},
            enemyField: newEnemyField
            };
            return newState;
          } else {
            // Повторное попадание
          }
        } else {
          // Попали в воду
          let grid=state.opponent_board.grid.slice();
          if (grid[y][x] === Constants.GRID_VALUE_WATER)
          {
            // До этого туда не стреляли
            fire_registered=true;
            // хотя это бы и не обязательно делать (заполнять enemyField для воды), все равно попадание у нас контролируется по-другому,
            // но для корректности данных лучше так сделать
            let newEnemyField=state.enemyField.slice();
            newEnemyField[y][x].shot=true;
            //
            grid[y][x] = Constants.GRID_VALUE_WATER_HIT;
            //this.setState({ enemyField: newEnemyField, opponent_board: { ...this.state.opponent_board, grid: grid} });
            return {
              ...state,
              opponent_board: { ...state.opponent_board, grid: grid}, enemyField: newEnemyField
            };
      
          }
        }
      }
      return {
        ...state,     
      }
      */
      
/* 
      let grid=state.opponent_board.grid.slice();
      grid[0][0] = Constants.GRID_VALUE_SHIP_HIT;
      let remaining_hit_points = state.opponent_board.remaining_hit_points;
      remaining_hit_points = remaining_hit_points - 1;
      return {
        ...state,
        opponent_board: { grid: grid, remaining_hit_points: remaining_hit_points }
      };
     case "add_note":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: Math.random().toString(36).substring(7),
            title: action.note,
            completed: false,
          },
        ],
      };

    case "done_note":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.id ? { ...note, completed: !note.completed } : note
        ),
      };

    case "delete_note":
      return {
        ...state,
        notes: state.notes.filter(({ id }) => id !== action.id),
      };
      */

    default:
      throw new Error();
  }
};
