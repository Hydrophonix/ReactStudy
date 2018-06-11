import React, { Component } from 'react'

import styles from '../assets/Todo.less'

export default class extends Component {
  handleToggle = () =>
    this.props.onToggle(this.props.id)

  handleDelete = () =>
    this.props.onDelete(this.props.id)

  render() {
    const { text, completed } = this.props

    return(
      <div className={styles.root}>
        <span
          className={completed ? styles.completedIcon : styles.rootIcon}
          onClick={this.handleToggle}
        >
          {completed ? '☑' : '☐'}
        </span>
        {text}
        <span
          className={styles.deleteIcon}
          onClick={this.handleDelete}
        >
          ☒
        </span>
      </div>
    )
  }
}
