import Constants from './constants';

type Note = {
  id: string;
  title: string;
  completed: boolean;
};

type State = {
  notes: Array<Note>;
  opponent_board: { grid: string[][], remaining_hit_points: number }
};

type Action =
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
    case "lets_fire":
      let grid=state.opponent_board.grid.slice();
      grid[0][0]=Constants.GRID_VALUE_SHIP_HIT;
      let remaining_hit_points=state.opponent_board.remaining_hit_points;
      remaining_hit_points=remaining_hit_points-1;
      return {
        ...state,
        opponent_board: {grid: grid, remaining_hit_points:remaining_hit_points}
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

    default:
      throw new Error();
  }
};
