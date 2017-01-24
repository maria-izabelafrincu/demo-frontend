import React from 'react';
import TextInput from '../common/TextInput';

const ToDoForm = ({toDo, onSave, onChange, saving, errors, onCancel}) => {
  return (
    <form>
      <h1>Manage To Do</h1>
      <TextInput
        name="title"
        label="Title"
        value={toDo.title}
        onChange={onChange}
        error={errors.title}/>

      <TextInput
        name="description"
        label="Description"
        value={toDo.description}
        onChange={onChange}
        error={errors.category}/>
      <div className="row">
        <div className="col-xs-2">
          <input
            type="submit"
            disabled={saving}
            value={saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={onSave}/>
        </div>
        <div className="col-xs-2">
          <input
            type="submit"
            value="Cancel"
            className="btn btn-danger"
            onClick={onCancel}/>
        </div>
      </div>
    </form>
  );
};

ToDoForm.propTypes = {
  toDo: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default ToDoForm;
