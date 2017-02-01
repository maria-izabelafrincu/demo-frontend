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
    this.state={toDo:this.props.toDo};
    this.toggleDelete = this.toggleDelete.bind(this);
    this.statusChanged = this.statusChanged.bind(this);
    this.redirectToAddToDoPage = this.redirectToAddToDoPage.bind(this);
    this.goToUpdate = this.goToUpdate.bind(this);
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

  goToUpdate(e, toDo) {
    //this.state.toDo = toDo;
    //this.props.children = {};
    //Object.assign({}, nextProps.toDo);
    //this.props.children.toDo = toDo;
    browserHistory.push('/toDo/' + toDo.title);
  }

  render() {
    const{toDos} = this.props;
    return (
      <div className="jumbotron">
        <h1>TO DO</h1>
        <ToDoList toDos={toDos} toggleDelete={this.toggleDelete} toggleStatusChange={this.statusChanged} goToUpdate={this.goToUpdate} />
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
