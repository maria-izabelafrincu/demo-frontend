import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as toDoActions from '../../actions/toDoActions';
import {bindActionCreators} from 'redux';
import ToDoList from './ToDoList';
import {browserHistory} from 'react-router';

class ToDoPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.statusChanged = this.statusChanged.bind(this);
    this.redirectToAddToDoPage = this.redirectToAddToDoPage.bind(this);
  }
  
  toggleDelete(e, title) {
    //e.preventDefault();
    console.log("Am apasat " + title);
  }

  statusChanged(e, title, value) {
    console.log("schimb  " + title + "   " + value);
    this.props.toDos.map((toDo) => {
      if(toDo.title === title) {
        toDo.is_done = value;
        //aici
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

function mapStateToProps(state, ownProps){
  return{
    toDos: state.toDos
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(toDoActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);
