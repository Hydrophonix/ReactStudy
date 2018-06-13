import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '../assets/Counter.less'

export default class extends Component {
  static propTypes = {
      id: PropTypes.number,
      count: PropTypes.number,
      increment: PropTypes.func,
      decrement: PropTypes.func
  }

  handleIncrement = () =>
    this.props.increment(this.props.id)

  handleDecrement = () =>
    this.props.decrement(this.props.id)

  render() {

    return (
        <div className={styles.counter}>
          <button className={styles.counterButton} onClick={this.handleDecrement}>-</button>
          {this.props.count}
          <button className={styles.counterButton} onClick={this.handleIncrement}>+</button>
        </div>
    )
  }
}
