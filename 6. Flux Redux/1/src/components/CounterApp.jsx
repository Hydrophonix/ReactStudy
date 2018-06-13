import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addCounter, increment, decrement } from '../actions'

import Counter from './Counter.jsx'

import styles from '../assets/CounterApp.less'

const mapStateToProps = state => ({
  counters: state
})

const mapDispatchToProps = dispatch => ({
  addCounter: bindActionCreators(addCounter, dispatch),
  increment: bindActionCreators(increment, dispatch),
  decrement: bindActionCreators(decrement, dispatch)
})

@hot(module)
@connect(mapStateToProps, mapDispatchToProps)
export default class extends Component {
  static propTypes = {
      counters: PropTypes.array,
      addCounter: PropTypes.func,
      increment: PropTypes.func,
      decrement: PropTypes.func
  }

  render() {
    const { counters, increment, decrement, addCounter } = this.props

    return (
      <div className={styles.counterWrapper}>
        {counters.map(({ id, count }) =>
          <Counter
            key={id}
            id={id}
            count={count}
            increment={increment}
            decrement={decrement}
          />
        )}
        <button
          className={styles.addCounter}
          onClick={addCounter}
        >
          ADD COUNTER
        </button>

      </div>
    )
  }
}
