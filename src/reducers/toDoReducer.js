import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function toDoReducer(state = initialState.toDos, action){
  switch (action.type) {
    case types.LOAD_TODOS_SUCCESS:
          return action.toDos;
    case types.CREATE_TODO_SUCCESS:
          return [...state,
          Object.assign({}, action.toDo)
          ];
    case types.UPDATE_TODO_SUCCESS:
      return [
        ...state.filter(toDo => toDo.title !== action.toDo.title),
        Object.assign({}, action.toDo)
      ];
    default:
          return state;
  }
}
