import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ToDoListRow = ({toDo, toggleDelete, toggleStatusChange}) => {
  return (
    <tr>
      <td>
        <input type="checkbox" checked={toDo.is_done} onChange={(e) => toggleStatusChange(e, toDo.title, e.target.checked)}></input>
        </td>
      <td><Link to={'/toDo/' + toDo.title}>{toDo.title}</Link></td>
      <td>{toDo.description}</td>
      <td>{toDo.created_on}</td>
      <td>{toDo.updated_on}</td>
      <td><button onClick={(e) => toggleDelete(e, toDo.title)}></button></td>
    </tr>
  );
};

ToDoListRow.propTypes = {
  toDo: PropTypes.object.isRequired
};

export default ToDoListRow;
