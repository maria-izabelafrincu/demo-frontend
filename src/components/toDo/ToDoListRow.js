import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ToDoListRow = ({toDo, toggleDelete, toggleStatusChange, goToUpdate}) => {
  return (
    <tr>
      <td>
        <input type="checkbox"  value="Test" checked={toDo.is_done} onChange={(e) => toggleStatusChange(e, toDo.title, e.target.checked)}></input>
        </td>
      <td><button className="btn btn-danger" onClick={(e) => goToUpdate(e, toDo)}>{toDo.title}</button></td>
      {/*<td><Link to={'/toDo/' + toDo.title}>{toDo.title}</Link></td>*/}
      <td>{toDo.description}</td>
      <td>{toDo.created_on}</td>
      <td>{toDo.updated_on}</td>
      <td><button className="btn btn-danger" onClick={(e) => toggleDelete(e, toDo)}>Delete</button></td>
    </tr>
  );
};

ToDoListRow.propTypes = {
  toDo: PropTypes.object.isRequired
};
export default ToDoListRow;
