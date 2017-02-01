import * as types from './actionTypes';
import toDoApi from '../api/toDoApi';

export function loadToDosSuccess(toDos) {
  return { type: types.LOAD_TODOS_SUCCESS, toDos};
}

export function createToDoSuccess(toDo) {
  return { type: types.CREATE_TODO_SUCCESS, toDo};
}

export function updateToDoSuccess(toDo) {
  return { type: types.UPDATE_TODO_SUCCESS, toDo};
}

export function deleteToDoSuccess(toDo) {
  return { type: types.DELETE_TODO_SUCCESS, toDo};
}

export function getToDoSuccess(toDo) {
  return { type: types.GET_TODO_SUCCESS, toDo};
}

export function deleteToDo(toDo) {
  return function (dispatch) {
    return toDoApi.deleteToDo(toDo).then(() => {
      dispatch(deleteToDoSuccess(toDo));
      return;
    }).catch(error => {
      throw(error);
    });
  };
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
    return toDoApi.saveToDo(toDo).then(toDo => {
      toDo.title ? dispatch(updateToDoSuccess(toDo)) :
        dispatch(createToDoSuccess(toDo));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateToDo(toDo) {
  return function (dispatch) {
    return toDoApi.updateToDo(toDo).then(response => {
      dispatch(updateToDoSuccess(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getToDo(title) {
  return function (dispatch) {
    return toDoApi.getToDo(title).then(response => {
      dispatch(getToDoSuccess(response));
    }).catch(error => {
      throw(error);
    });
  };
}
