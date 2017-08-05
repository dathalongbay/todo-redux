//libraries
import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';
//components
import AddTodoForm  from './components/AddTodoForm';
import TodoList     from './components/TodoList';
import TodoFilter   from './components/TodoFilter';
//constants
import ActionType from './components/ActionType';
import FilterType from './components/FilterType';

var defaultState = {
  todo: {
    items: [],
    filter: FilterType.FILTER_ALL
  }
};

function todoApp(state, action){
  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ActionType.ADD_TODO:
      newState.todo.items.push({
        message: action.message,
        completed: false
      });
      break;
    case ActionType.COMPLETE_TODO:
      newState.todo.items[action.index].completed = !newState.todo.items[action.index].completed;
      break;
    case ActionType.DELETE_TODO:
      newState.todo.items.splice(action.index, 1);
      break;
    case ActionType.CLEAR_ALL:
      newState.todo.items = [];
      break;
    case ActionType.FILTER_TODO:
      newState.todo.filter = action.filter;
      break;
    default:
      break;
  }
  return newState;
};

var store = createStore(todoApp, defaultState);

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <AddTodoForm />
        <TodoList />
        <TodoFilter filter={defaultState.todo.filter}/>
      </div>
    );
  }
}

export default App;
export {store};
