import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map(item => {
    if(item.id !== itemId) {
      return item;
    }

    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
}


export default function toDoReducer(state = initialState.toDos, action){
  switch (action.type) {
    case types.LOAD_TODOS_SUCCESS:
          return action.toDos;

    case types.GET_TODO_SUCCESS:
          return action.toDo;

    case types.CREATE_TODO_SUCCESS:
          return [...state,
          Object.assign({}, action.toDo)
          ];

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
      return newState;
    }

    default:
          return state;
  }
}
