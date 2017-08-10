import {combineReducers} from 'redux';
import {ActionType, FilterType} from '../constants/constants';

function todos(state = [], action){
  var newState = JSON.parse(JSON.stringify(state)); // deep copy object
  switch (action.type) {
    case ActionType.ADD_TODO:
      newState.push({
        message: action.message,
        completed: false
      });
      break;
    case ActionType.COMPLETE_TODO:
      newState[action.index].completed = !newState[action.index].completed;
      break;
    case ActionType.DELETE_TODO:
      newState.splice(action.index, 1);
      break;
    case ActionType.CLEAR_ALL:
      newState = [];
      break;
    default:
      break;
  }
  return newState;
}

function filter(state = FilterType.FILTER_ALL, action){
  var newState = JSON.parse(JSON.stringify(state)); // deep copy object
  switch (action.type) {
    case ActionType.FILTER_TODO:
      newState = action.filter;
      break;
    default:
      break;
  }
  return newState;
}

export const todoApp = combineReducers({
  items: todos,
  filter: filter
});
