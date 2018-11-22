/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const APIURL = '/api/todos/';

export async function loadTodos() {
  return fetch(APIURL)
    .then((res) => {
      if (!res.ok) {
        if (res.status >= 400 && res.status < 500) {
          return res.json()
            .then((data) => {
              const err = { errorMessage: data.message };
              throw err.errorMessage;
            });
        }
        const err = { errorMessage: 'Please try again later. Server not responding.' };
        throw err.errorMessage;
      }
      return res.json();
    });
}

export async function createTodo(val, label) {
  return fetch(APIURL, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({ name: val, label }),
  })
    .then((res) => {
      if (!res.ok) {
        if (res.status >= 400 && res.status < 500) {
          return res.json()
            .then((data) => {
              const err = { errorMessage: data.message };
              throw err.errorMessage;
            });
        }
        const err = { errorMessage: 'Please try again later. Server not responding.' };
        throw err.errorMessage;
      }
      return res.json();
    });
}

export async function removeTodo(id) {
  const deleteUrl = APIURL + id;
  return fetch(deleteUrl, { method: 'DELETE' })
    .then((res) => {
      if (!res.ok) {
        if (res.status >= 400 && res.status < 500) {
          return res.json()
            .then((data) => {
              const err = { errorMessage: data.message };
              throw err.errorMessage;
            });
        }
        const err = { errorMessage: 'Please try again later. Server not responding.' };
        throw err.errorMessage;
      }
      return res.json();
    });
}

export async function updateTodo(todo) {
  const updateUrl = APIURL + todo._id;
  return fetch(updateUrl, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({ completed: !todo.completed }),
  })
    .then((res) => {
      if (!res.ok) {
        if (res.status >= 400 && res.status < 500) {
          return res.json()
            .then((data) => {
              const err = { errorMessage: data.message };
              throw err.errorMessage;
            });
        }
        const err = { errorMessage: 'Please try again later. Server not responding.' };
        throw err.errorMessage;
      }
      return res.json();
    });
}
