import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import TodoList from './TodoList.jsx'
import AddTodo from './AddTodo.jsx'
import Footer from './Footer.jsx'

import styles from '../assets/TodoApp.less'

@hot(module)
export default class extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <h2 className={styles.header}>
            To Do
          </h2>
          <div className={styles.app}>
            <AddTodo />
            <TodoList />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
