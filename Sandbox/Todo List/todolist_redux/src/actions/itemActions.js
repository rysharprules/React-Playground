import * as types from './actionTypes';

export function addTodo(todo) {
  return {type: types.ADD_ITEM, todo};
}

export function deleteTodo(key) {
  return {type: types.REMOVE_ITEM, key};
}