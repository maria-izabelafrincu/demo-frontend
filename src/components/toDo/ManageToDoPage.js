import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as toDoActions from '../../actions/toDoActions';
import ToDoForm from './ToDoForm';
import toastr from 'toastr';
import {browserHistory} from 'react-router';

class ManageToDoPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      toDo: Object.assign({}, props.toDo),
      errors: {},
      saving: false
    };

    this.updateToDoState = this.updateToDoState.bind(this);
    this.saveToDo = this.saveToDo.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.toDo.title != nextProps.toDo.title) {
      this.setState({toDo: Object.assign({}, nextProps.toDo)});
    }
  }

  updateToDoState(event) {
    const field = event.target.name;
    let toDo = this.state.toDo;
    toDo[field] = event.target.value;
    return this.setState({toDo});
  }

  saveToDo(event){
    event.preventDefault();
    this.setState({saving:true});
    this.props.actions.saveToDo(this.state.toDo)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect(){
    //this.setState({saving:false});
    toastr.success('ToDo saved');
    this.context.router.push('/');
  }

  cancelToDo(){
    //this.setState({saving:false});
    this.context.router.push('/');
    browserHistory.goBack();

  }

  render(){
    return(
      <ToDoForm
        toDo={this.state.toDo}
        onChange={this.updateToDoState}
        onSave={this.saveToDo}
        onCancel={this.cancelToDo}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageToDoPage.propTypes = {
  toDo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageToDoPage.contextTypes = {
  router: PropTypes.object
};

function getToDoByTitle(toDo, title) {
  const toDO = toDo.filter(toDo => toDo.title == title);
  if (toDO) return toDo[0];
  return null;
}

function mapStateToProps(state, ownProps){
  const toDoTitle = ownProps.params.title;
  let toDo = {title: '', description: '', created_on: '', updated_on: '', is_done: false};
  if(toDoTitle && state.toDos.length > 0){
    toDo = getToDoByTitle(state.toDos, toDoTitle);
  }
  return{
    toDo: toDo
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(toDoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageToDoPage);
