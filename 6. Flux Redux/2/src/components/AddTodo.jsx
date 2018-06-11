import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo, doneAllTodos } from '../actions'

import styles from '../assets/AddTodo.less'

const ENTER_KEY = 13

@connect(undefined, { addTodo, doneAllTodos })
export default class extends Component {
  constructor() {
    super()

    this.handleTextChange = ::this.handleTextChange
    this.handleAddTodo = ::this.handleAddTodo
  }

  state = {
    text: ''
  }

  handleTextChange({ target: { value }}) {
    this.setState({
      text: value
    })
  }

  handleAddTodo(e) {
    e.keyCode === ENTER_KEY
    && this.props.addTodo(this.state.text)
    && this.setState({ text: '' })
  }

  handleDoneAllTodos = () =>
    this.props.doneAllTodos()

  render() {
    const { text } = this.state

    return(
      <div className={styles.root}>
        <span
          className={styles.doneAllIcon}
          onClick={this.handleDoneAllTodos}
        >
          ✓
        </span>
        <input
          className={styles.input}
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={this.handleTextChange}
          onKeyDown={this.handleAddTodo}
        />
      </div>
    )
  }
}
