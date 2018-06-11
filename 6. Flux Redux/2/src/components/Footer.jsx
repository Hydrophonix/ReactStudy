import React from 'react'

import FilterLink from './FilterLink.jsx'

import styles from '../assets/Footer.less'

export default props =>
  <div className={styles.root}>
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    <FilterLink filter="SHOW_NEW">New</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </div>
