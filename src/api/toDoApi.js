class ToDoApi {
  static getAllToDos() {
    return fetch('http://localhost:8081/to_do').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ToDoApi;
