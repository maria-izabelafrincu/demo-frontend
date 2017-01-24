import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ToDoPage from './components/toDo/ToDoPage';
import ManageToDoPage from './components/toDo/ManageToDoPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ToDoPage} />
    <Route path="toDo" component={ManageToDoPage} />
    <Route path="toDo/:title" component={ManageToDoPage} />
  </Route>
);
