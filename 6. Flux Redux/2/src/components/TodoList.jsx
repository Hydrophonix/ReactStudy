import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleTodo, deleteTodo } from '../actions'
import Todo from './Todo.jsx'

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

@connect(mapStateToProps, { toggleTodo, deleteTodo })
export default class extends Component {
  render() {
    const { todos, filter, toggleTodo, deleteTodo } = this.props

    return(
      <div className="base">
        {todos.filter(item => item).map(({ id, text, completed }) =>
          <Todo
            key={id}
            id={id}
            text={text}
            completed={completed}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        )}
      </div>
    )
  }
}
