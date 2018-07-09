import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo, doneAllTodos } from '../actions'

import styles from '../assets/AddTodo.less'

@connect(undefined, { addTodo, doneAllTodos })
export default class extends Component {
  constructor() {
    super()

    this.handleChange = ::this.handleChange
    this.handleAddTodo = ::this.handleAddTodo
  }

  state = {
    text: '',
    seconds: ''
  }

  handleChange({ target: { value, name }}) {
    this.setState({
      [name]: value
    })
  }

  handleAddTodo(e) {
    if (e.key === 'Enter') {
      const { text, seconds } = this.state
      let textArr = text.split('#')

      this.props.addTodo(textArr.shift(), textArr, seconds)
      this.setState({ text: '', seconds: '' })
    }
  }

  handleDoneAllTodos = () =>
    this.props.doneAllTodos()

  render() {
    const { text, seconds } = this.state

    return(
      <div className={styles.root}>
        <span
          className={styles.doneAllIcon}
          onClick={this.handleDoneAllTodos}
        >
          ✓
        </span>
        <div className={styles.inputWrapper}>
          <input
            name="text"
            className={styles.input}
            type="text"
            placeholder="What needs to be done?"
            value={text}
            onChange={this.handleChange}
            onKeyDown={this.handleAddTodo}
          />
          <input
            name="seconds"
            className={styles.input}
            type="number"
            placeholder="How much time to perform? (in seconds)"
            value={seconds}
            onChange={this.handleChange}
            onKeyDown={this.handleAddTodo}
          />
        </div>
      </div>
    )
  }
}
