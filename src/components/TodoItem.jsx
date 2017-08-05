import React, {Component} from 'react';
import ActionType from './ActionType';
import {store} from '../App';

function completeTodo(index){
  return {
    type: ActionType.COMPLETE_TODO,
    index: index
  }
}

function deleteTodo(index){
  return {
    type: ActionType.DELETE_TODO,
    index: index
  }
}

class TodoItem extends Component {
  onItemClick(e){
    e.preventDefault();
    store.dispatch(completeTodo(this.props.index));
  }
  onDeleteClicked(e){
    e.preventDefault();
    store.dispatch(deleteTodo(this.props.index));
  }
  render(){
    return(
      <li>
        <a href="" onClick={(e)=>this.onItemClick(e)} style={{textDecoration: this.props.completed? 'line-through':'none'}}>{this.props.message.trim()}</a>
        <a href="" onClick={(e)=>this.onDeleteClicked(e)} style={{textDecoration: 'none'}}> [x]</a>
      </li>
    );
  }
}

export default TodoItem;
