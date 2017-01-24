import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const toDos = [
  {
    title: "react-flux-building-applications",
    description:"Building Applications in React and Flux",
    created_on: "2017-01-02",
    updated_on: "2017-01-10",
    is_done: true
  },
  {
    title: "clean-code",
    description: "Clean Code: Writing Code for Humans",
    created_on: "2017-01-02",
    updated_on: "2017-01-10",
    is_done: false
  },
  {
    title: "architecture",
    description: "Architecting Applications for the Real World",
    created_on: "2017-01-02",
    updated_on: "2017-01-10",
    is_done: true
  },
  {
    title: "career-reboot-for-developer-mind",
    description: "Becoming an Outlier: Reprogramming the Developer Mind",
    created_on: "2017-01-02",
    updated_on: "2017-01-10",
    is_done: true
  },
  {
    title: "web-components-shadow-dom",
    description: "Web Component Fundamentals",
    created_on: "2017-01-02",
    updated_on: "2017-01-10",
    is_done: true
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (toDo) => {
  return replaceAll(toDo.title, ' ', '-');
};

class ToDoApi {
  static getAllToDo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], toDos));
      }, delay);
    });
  }

  static saveToDo(toDo) {
    toDo = Object.assign({}, toDo); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (toDo.title) {
          const existingToDoIndex = toDos.findIndex(a => a.title == toDo.title);
          console.log(toDo);
          toDos.splice(existingToDoIndex, 1, toDo);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new todos in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          toDo.title = generateId(toDo);
          toDos.push(toDo);
        }
        const minToDoTitleLength = 1;
        if (toDo.title.length < minToDoTitleLength) {
          reject(`Title must be at least ${minToDoTitleLength} characters.`);
        }
        resolve(toDo);
      }, delay);
    });
  }

  static deleteToDo(toDoId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfToDoToDelete = toDos.findIndex(toDo => {
          toDo.title == toDoId;
        });
        toDos.splice(indexOfToDoToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ToDoApi;
