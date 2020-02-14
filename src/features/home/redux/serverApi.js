import {
  HOME_SERVER_API,
} from './constants';

export function reducer(state, action) {
      return state;
}

export function getTodoList() {

  return fetch(HOME_SERVER_API + "/getList")
    .then(res => res.json());
}

export function saveTodos(data) {
  return fetch(HOME_SERVER_API + "/saveUpdate", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());
}

export function removeTodos(data) {
  return fetch(HOME_SERVER_API + "/delete", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());
}