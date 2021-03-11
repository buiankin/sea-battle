import Constants from './constants';
import { codeCoordinate, decodeCoordinate} from './utils/Common';

import MyBoard from './components/my_board'
import OpponentBoard from './components/opponent_board';

import placeShip from './utils/placeShip';
import placeVarious from './utils/standardShipsSet';


type Note = {
  id: string;
  title: string;
  completed: boolean;
};

type State = {
  notes: Array<Note>;
  my_board: { grid: string[][]},
  myField: any[],
  opponent_board: { grid: string[][], remaining_hit_points: number},
  enemyField: any[]
};

type Action =
| {
  type: "init";
}
  | {
    type: "lets_fire";
    note: string;
  }
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

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
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

    case "lets_fire":
      let fire_registered=false;
      let coord=decodeCoordinate(action.note);
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
            let new_remaining_hit_points=state.opponent_board.remaining_hit_points-1;
            //setState({ enemyField: newEnemyField, opponent_board: { ...appState.opponent_board, grid: grid, remaining_hit_points: remaining_hit_points} });
            let newState={...state,
            opponent_board: {grid: grid, remaining_hit_points: new_remaining_hit_points},
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

/* 
      let grid=state.opponent_board.grid.slice();
      grid[0][0] = Constants.GRID_VALUE_SHIP_HIT;
      let remaining_hit_points = state.opponent_board.remaining_hit_points;
      remaining_hit_points = remaining_hit_points - 1;
      return {
        ...state,
        opponent_board: { grid: grid, remaining_hit_points: remaining_hit_points }
      };
 */    case "add_note":
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

    default:
      throw new Error();
  }
};
