import {ActionType} from '../constants/constants';

export function addTodo(message){
  return {
    type: ActionType.ADD_TODO,
    message: message,
    completed: false
  }
};

export function clearTodo(){
  return {
    type: ActionType.CLEAR_ALL,
  }
};

export function completeTodo(index){
  return {
    type: ActionType.COMPLETE_TODO,
    index: index
  }
}

export function deleteTodo(index){
  return {
    type: ActionType.DELETE_TODO,
    index: index
  }
}

export function filterTodo(value) {
  return {
    type: ActionType.FILTER_TODO,
    filter: value
  };
}
