import React, {Component} from 'react';
import ActionType from './ActionType';
import FilterType from './FilterType';
import {store} from '../App';

function filterTodo(value) {
  return {
    type: ActionType.FILTER_TODO,
    filter: value
  };
}

class TodoFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      option: this.props.filter
    };
  }
  componentWillMount(){
    store.subscribe(()=>{
      this.setState({
        option: store.getState().todo.filter
      })
    });
  }
  filterSelected(e){
    var selected = e.target.value;
    this.setState({
      option: selected
    });
    store.dispatch(filterTodo(selected));
  }
  render(){
    return(
      <div>
        <label><input type="radio" name="filterTodo" value={FilterType.FILTER_ALL} checked={this.state.option === FilterType.FILTER_ALL} onChange={(e)=>this.filterSelected(e)}/>All</label>
        <label><input type="radio" name="filterTodo" value={FilterType.FILTER_COMPLETED} checked={this.state.option === FilterType.FILTER_COMPLETED} onChange={(e)=>this.filterSelected(e)}/>Completed</label>
        <label><input type="radio" name="filterTodo" value={FilterType.FILTER_UNDONE} checked={this.state.option === FilterType.FILTER_UNDONE} onChange={(e)=>this.filterSelected(e)}/>Un Done</label>
      </div>
    );
  }
}

export default TodoFilter;
