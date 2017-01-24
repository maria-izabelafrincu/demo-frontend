import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function toDoReducer(state = initialState.toDos, action){
  switch (action.type) {
    case types.LOAD_TODOS_SUCCESS:
          return action.toDos;

    case types.CREATE_TODO_SUCCESS:
          browserHistory.push(`/`);
          return [...state,
          Object.assign({}, action.toDo)
          ];

      return state.map((todo, index) => {
        if (index === action.index) {
          // Copy the object before mutating
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      });

    case types.UPDATE_TODO_SUCCESS:
      return [
        ...state.filter(toDo => toDo.title !== action.toDo.title),
        Object.assign({}, action.toDo)
      ];

    case types.DELETE_TODO_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfToDoToDelete = state.findIndex(toDo => {
        return toDo.title == action.toDo.title
      });
      newState.splice(indexOfToDoToDelete, 1);
      browserHistory.push('/');
      return newState;
    }

    default:
          return state;
  }
}
