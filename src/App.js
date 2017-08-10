import './App.css';
//libraries
import React, { Component } from 'react';
import { createStore } from 'redux';
import {todoApp} from './redux/reducer';
//components
import AddTodoForm  from './components/AddTodoForm';
import TodoList     from './components/TodoList';
import TodoFilter   from './components/TodoFilter';
//constants
import {FilterType} from './constants/constants';

var defaultState = {
  items: [],
  filter: FilterType.FILTER_ALL
};

var store = createStore(todoApp, defaultState);

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <AddTodoForm />
        <TodoList />
        <TodoFilter filter={defaultState.filter}/>
      </div>
    );
  }
}

export default App;
export {store};
