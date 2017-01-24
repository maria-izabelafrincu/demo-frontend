import React, {PropTypes} from 'react';
import ToDoListRow from './ToDoListRow';
import mockApi from '../../api/mockToDoApi';

const ToDoList = ({toDos, toggleDelete, toggleStatusChange}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Status</th>
        <th>Title</th>
        <th>Description</th>
        <th>Created on</th>
        <th>Updated on</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {toDos.map(toDo =>
        <ToDoListRow key={toDo.title} toDo={toDo} toggleDelete={toggleDelete} toggleStatusChange={toggleStatusChange} />
      )}
      </tbody>
    </table>
  );
};

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired
};

export default ToDoList;
