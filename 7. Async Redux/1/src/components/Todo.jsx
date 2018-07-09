import React, { Component } from 'react'
import className from 'classnames'

import styles from '../assets/Todo.less'

export default class extends Component {
  state = {
    text: '',
    editMode: false
  }

  static getDerivedStateFromProps(props, state) {
    if (props.text !== state.text) {
      return {
        text: props.text
      }
    }

    return null;
  }

  handleToggleEditMode = () =>
    this.setState(state => ({ editMode: !state.editMode }))

  handleTextChange = e =>
    this.setState({ text: e.target.value})

  handleToggle = () =>
    this.props.onToggle(this.props.id)

  handleDelete = () =>
    this.props.onDelete(this.props.id)

  handleChangeTodoText = e => {
    if (e.key === 'Enter') {
      this.handleToggleEditMode()
      this.props.changeTodoText(this.props.id, this.state.text)
    }
  }

  render() {
    const { completed, expired, hashtags } = this.props
    const { text, editMode } = this.state

    const spanClassName = className({
      [styles.rootIcon]: true,
      [styles.completedIcon]: completed,
    })

    const wrapperClassName = className({
      [styles.expiredTodo]: expired
    })

    return(
      <div className={wrapperClassName}>
        <div className={styles.root}>
          <span
            className={spanClassName}
            onClick={this.handleToggle}
          >
            {completed ? '☑' : '☐'}
          </span>
          {editMode
            ? <input
                className={styles.text}
                value={text}
                onChange={this.handleTextChange}
                onKeyPress={this.handleChangeTodoText}
              />
            : <div
                className={styles.text}
                onDoubleClick={this.handleToggleEditMode}
                >
                {text}
              </div>
          }
          <span
            className={styles.deleteIcon}
            onClick={this.handleDelete}
          >
            ☒
          </span>
        </div>
        <div className={styles.hashtags}>
          {hashtags.map((item, i) =>
            <span key={i}>#{item} </span>
          )}
        </div>
      </div>
    )
  }
}
