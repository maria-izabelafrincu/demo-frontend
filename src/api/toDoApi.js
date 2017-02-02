class ToDoApi {
  static getAllToDos() {
    return fetch('http://localhost:8081/to_do').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateToDo(toDo) {
    const request = new Request(`http://localhost:8081/to_do/${toDo.title}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(toDo)
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static saveToDo(toDo) {
    const request = new Request('http://localhost:8081/to_do', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(toDo)
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteToDo(toDo) {
    const request = new Request(`http://localhost:8081/to_do/${toDo.title}`, {
      method: 'DELETE'
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getToDo(title) {
    const request = new Request(`http://localhost:8081/to_do/${title}`, {
      method: 'GET'
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ToDoApi;
