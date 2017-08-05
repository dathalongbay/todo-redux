import React, {Component} from 'react';
import TodoItem from './TodoItem';
import {store} from '../App';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }
  componentWillMount(){
    store.subscribe(()=>{
      this.setState({
        items: store.getState().todo.items
      })
    });
  }
  render(){
    var items = [];
    this.state.items.forEach((item,index)=>{
      items.push(
        <TodoItem
          key={index}
          index={index}
          message={item.message}
          completed={item.completed}
        />
      );
    });
    if(!items.length){
      return(
        <div>
          <p>Please add task to do.</p>
        </div>
      );
    }
    else{
      return(
        <ol>
          {items}
        </ol>
      );
    }
  }
}

export default TodoList;
