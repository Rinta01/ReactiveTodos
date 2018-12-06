import * as apiCalls from '../api';

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const GET_TODOS = "GET_TODOS";
export const UPDATE_TODO = "UPDATE_TODO";

function handleTodos(todos) {
  return {
    type: GET_TODOS,
    todos
  };
}

function handleAdd(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}


function handleUpdate(todo) {
  return {
    type: UPDATE_TODO,
    todo
  };
}

function handleRemove(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

export function getTodos() {
  return dispatch => {
    return apiCalls.loadTodos()
      .then(todos => dispatch(handleTodos(todos)));
  };
}

export function addTodo(name, label) {
  return dispatch => {
    return apiCalls.createTodo(name,label)
      .then(todo => dispatch(handleAdd(todo)));    
  };
}

export function updateTodo(todo) {
  return dispatch => {
    return apiCalls.updateTodo(todo)
      .then(todo => dispatch(handleUpdate(todo)));    
  };
}

export function removeTodo(id) {
  return dispatch => {
    return apiCalls.removeTodo(id)
      .then(() => dispatch(handleRemove(id)));
  };
}
