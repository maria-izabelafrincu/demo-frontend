import {combineReducers} from 'redux';
import toDos from './toDoReducer';

const rootReducer = combineReducers({
  toDos
});

export default rootReducer;
