import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleTodo, deleteTodo, changeTodoText } from '../actions'
import Todo from './Todo.jsx'

import styles from '../assets/TodoList.less'

function mapStateToProps(state) {
  return {
    todos: filterTodos(state.todos, state.filter)
  }
}

function filterTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_COMPLETED': {
      return todos.filter(todo => todo.completed)
    }

    case 'SHOW_NEW': {
      return todos.filter(todo => !todo.completed)
    }

    case 'SHOW_ALL':
    default: {
      return todos
    }
  }
}

@connect(mapStateToProps, { toggleTodo, deleteTodo, changeTodoText })
export default class extends Component {
  state = {
    searchText: ''
  }

  handleChangeSearchText = e =>
    this.setState({ searchText: e.target.value })

  searchTodo = ({ text, hashtags}) => {
    const searchText = this.state.searchText.split('#')
    return searchText.length === 2
      ? text.includes(searchText[0]) && hashtags.some(item => item.includes(searchText[1]))
      : text.includes(searchText[0])
  }

  render() {
    const {
      todos,
      filter,
      toggleTodo,
      deleteTodo,
      changeTodoText
    } = this.props

    const { searchText } = this.state

    return(
      <div className="base">
        <input
          className={styles.input}
          value={searchText}
          onChange={this.handleChangeSearchText}
          placeholder="Enter text to search"
          onKeyDown={this.handleSearch}
        />
        {todos.filter(this.searchTodo).map(({ id, text, completed, expired, hashtags }) =>
          <Todo
            key={id}
            id={id}
            text={text}
            completed={completed}
            expired={expired}
            hashtags={hashtags}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            changeTodoText={changeTodoText}
          />
        )}
      </div>
    )
  }
}
