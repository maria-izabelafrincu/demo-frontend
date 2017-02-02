import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as toDoActions from '../../actions/toDoActions';
import {bindActionCreators} from 'redux';
import ToDoList from './ToDoList';
import {Router, browserHistory} from 'react-router';
import toastr from 'toastr';

class ToDoPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.statusChanged = this.statusChanged.bind(this);
    this.redirectToAddToDoPage = this.redirectToAddToDoPage.bind(this);
  }

  toggleDelete(e, toDo) {
    this.props.actions.deleteToDo(toDo)
    toastr.success('ToDo deleted');
  }

  statusChanged(e, title, value) {
    this.props.toDos.map((toDo) => {
      if(toDo.title === title) {
        toDo.is_done = value;
        this.props.actions.updateToDo(toDo)
      }
    });
    this.forceUpdate();
  }

  toDoRow(toDo, index){
    return <div key={index}>{toDo.title}</div>;
  }

  redirectToAddToDoPage(){
    browserHistory.push('/toDo');
  }

  render() {
    const{toDos} = this.props;
    return (
      <div className="jumbotron">
        <h1>TO DO</h1>
        <ToDoList toDos={toDos} toggleDelete={this.toggleDelete} toggleStatusChange={this.statusChanged} />
        <input type="submit"
               value="Add To Do"
               className="btn btn-primary"
               onClick={this.redirectToAddToDoPage} />
      </div>
    );
  }
}

ToDoPage.propTypes ={
  toDos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ToDoPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps){
  return{
    toDos: state.toDos,
    toDo: state.toDo
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(toDoActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);
