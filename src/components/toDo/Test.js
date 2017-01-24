import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ToDoListRow = ({toDo}) => {
  return (
    <tr>
      <td><Link to={'/toDo/' + toDo.title}>{toDo.title}</Link></td>
      <td>{toDo.description}</td>
      <td>{toDo.created_on}</td>
      <td>{toDo.updated_on}</td>
    </tr>
  );
};

ToDoListRow.propTypes = {
  toDo: PropTypes.object.isRequired
};

export default ToDoListRow;
