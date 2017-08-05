import React, {Component} from 'react';
import {store} from '../App';
//constants
import ActionType from './ActionType';

function addTodo(message){
  return {
    type: ActionType.ADD_TODO,
    message: message,
    completed: false
  }
};

function clearTodo(){
  return {
    type: ActionType.CLEAR_ALL,
  }
};

class AddTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    }
  }
  onFormSubmit(e){
    e.preventDefault();
    var message = this.state.message;
    if(message){
      store.dispatch(addTodo(message));
    }
    this.setState({
      message: ''
    });
    // console.log("store: ", store.getState().todo.items);
  }
  onMessageChanged(e){
    this.setState({
      message: e.target.value
    });
  }
  onClearButtonClicked(e){
    e.preventDefault();
    store.dispatch(clearTodo());
  }
  render(){
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <input type="text" placeholder="New task" onChange={(e)=>this.onMessageChanged(e)} value={this.state.message}></input>
        <input type="submit" value="Add"></input>
        <input type="button" onClick={(e)=>this.onClearButtonClicked(e)} value="Clear All"></input>
      </form>
    );
  }
}

export default AddTodoForm;
