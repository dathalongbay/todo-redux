import React, {Component} from 'react';
import TodoItem from './TodoItem';
import {store} from '../App';
import {FilterType} from '../constants/constants';

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
        items: store.getState().items?store.getState().items:[],
        filter: store.getState().filter
      })
    });
  }
  render(){
    var items = [];
    var filter = this.state.filter;
    this.state.items.forEach((item,index)=>{
      if(filter === FilterType.FILTER_ALL || (filter === FilterType.FILTER_COMPLETED && item.completed)
      || (filter === FilterType.FILTER_UNDONE && !item.completed)){
        items.push(
          <TodoItem
            key={index}
            index={index}
            message={item.message}
            completed={item.completed}
          />
        );
      }
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
