import * as types from './actionTypes';
import toDoApi from '../api/toDoApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadToDosSuccess(toDos) {
  return { type: types.LOAD_TODOS_SUCCESS, toDos};
}

export function createToDoSuccess(toDo) {
  return { type: types.CREATE_TODO_SUCCESS, toDo};
}

export function updateToDoSuccess(toDo) {
  return { type: types.UPDATE_TODO_SUCCESS, toDo};
}

export function deleteToDo(toDo) {
  return { type: types.DELETE_TODO, toDo};
}


export function loadToDos(){
  return function(dispatch){
    return toDoApi.getAllToDos().then(toDos => {
      dispatch(loadToDosSuccess(toDos));
    }).catch(error =>{
      throw(error);
    });
  };
}

export function saveToDo(toDo) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return toDoApi.saveToDo(toDo).then(toDo => {
      toDo.id ? dispatch(updateToDoSuccess(toDo)) :
        dispatch(createToDoSuccess(toDo));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
