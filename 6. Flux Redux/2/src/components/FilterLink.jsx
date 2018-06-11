import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setFilter } from '../actions'

import styles from '../assets/FilterLink.less'

@connect(mapStateToProps, mapDispatchToProps)
export default class extends Component {
  render() {
    const { active, children, onClick} = this.props

    return active
      ? <span className={styles.active}>{children}</span>
      : <span className={styles.root} onClick={onClick}>{children}</span>
  }
}

function mapStateToProps(state, ownProps) {
  return {
    active: state.filter === ownProps.filter
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(setFilter(ownProps.filter))
  }
}
