import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Radio,
  FormGroup,
  FormControlLabel
} from 'material-ui'

import Transaction from './Transaction.jsx'

import { setFiltering, setSorting } from '../actions'

const SORTING = {
  lable: [
    'By amount from low to high',
    'By amount from high to low',
    'By date from old to new',
    'By date from new to old'
  ],
  action: [
    'AMOUNT',
    'AMOUNT_REVERSE',
    'DATE',
    'DATE_REVERSE'
  ],
  sortFunc: {
    AMOUNT: (a, b) => a.amount > b.amount ? 1 : 0,
    AMOUNT_REVERSE: (a, b) => a.amount > b.amount ? 0 : 1,
    DATE: (a, b) => a.date > b.date ? 1 : 0,
    DATE_REVERSE: (a, b) => a.date > b.date ? 0 : 1
  }
}

const FILTERING = {
  SHOW_ALL: item => item,
  INCOME: item => item.amount > 0,
  OUTCOME: item => item.amount < 0
};

const mapStateToProps = state => ({
  transactions: state.transactions.filter(FILTERING[state.filtering]).sort(SORTING.sortFunc[state.sorting]),
  filtering: state.filtering,
  sorting: state.sorting
})

@connect(mapStateToProps, { setFiltering, setSorting })
export default class extends Component {
  constructor() {
    super()

    this.handleChangeFiltering = ::this.handleChangeFiltering
  }

  state = {
      anchorEl: null,
      selectedIndex: 1,
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuItemClick = (event, index, actionValue) => {
    this.setState({ selectedIndex: index, anchorEl: null })
    this.props.setSorting(actionValue)
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleChangeFiltering(e) {
    this.props.setFiltering(e.target.value)
  }

  render() {
    const { transactions, filtering, sorting } = this.props
    const { anchorEl } = this.state

    return (
      <Paper style={{height: 600, overflowY: 'auto'}}>
        <FormGroup row style={{borderBottom: "2px solid black", padding: "0 10px"}}>
          <FormControlLabel
            control={
              <Radio
                checked={filtering === 'SHOW_ALL'}
                onChange={this.handleChangeFiltering}
                value="SHOW_ALL"
                aria-label="A"
              />
            }
            label="All"
          />
          <FormControlLabel
            control={
              <Radio
                checked={filtering === 'INCOME'}
                onChange={this.handleChangeFiltering}
                value="INCOME"
                aria-label="B"
              />
            }
            label="Income"
          />
          <FormControlLabel
            control={
              <Radio
                checked={filtering === 'OUTCOME'}
                onChange={this.handleChangeFiltering}
                value="OUTCOME"
                aria-label="C"
              />
            }
            label="Outcome"
          />
          <List component="nav">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="sort-menu"
            aria-label="Choose sorting"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary="Choose sorting"
              secondary={SORTING.lable[this.state.selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id="sort-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {SORTING.lable.map((item, index) => (
            <MenuItem
              key={item}
              selected={index === SORTING.action.indexOf(sorting)}
              onClick={event => this.handleMenuItemClick(event, index, SORTING.action[index])}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
        </FormGroup>
        <List>
          {
            transactions.map(item =>
              <Transaction
                key={item.date}
                date={item.date}
                name={item.lable}
                amount={item.amount}
                category={item.category}
              />
            )
          }
        </List>
      </Paper>
    )
  }
}
