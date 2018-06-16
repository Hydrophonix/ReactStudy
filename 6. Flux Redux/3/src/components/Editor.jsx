import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Paper, TextField, Select, Button, Typography } from 'material-ui'
import { MenuItem } from 'material-ui/Menu'

import { addTransaction } from '../actions'

const CATEGORIES = ['Shopping', 'Food', 'Entertainment', 'Other']

@connect(null, { addTransaction })
export default class extends Component {
  constructor() {
    super()

    this.handleAddTransaction = ::this.handleAddTransaction
    this.handleChange = ::this.handleChange
    this.resetState = ::this.resetState
  }

  state = {
      description: '',
      category: '',
      balance: ''
    }

  handleAddTransaction() {
    const lable = this.state.description
    const category = this.state.category || this.props.transType
    const amount = this.props.transType === 'Outcome'
      ? -this.state.balance
      : +this.state.balance

    this.props.addTransaction(lable, category, amount)

    this.resetState()
    this.props.onClose()
  }

  handleChange(name) {
    return ({ target: { value }}) =>
      this.setState({
        [name]: value
      })
  }

  resetState() {
    this.setState({
      description: '',
      category: '',
      balance: 0
    })
  }

  render() {
    const { description, category, balance } = this.state;

    return (
      <Paper style={{height: 600, paddingTop: 30}}>
        <form style={{textAlign: "center"}}>
          <Typography
            variant="title"
            style={{color: "#3f51b5"}}
          >
            Create transaction
          </Typography>
          <TextField
            label="Description"
            placeholder="Describe your transaction"
            value={description}
            onChange={this.handleChange('description')}
            margin="normal"
          />
          <br />
          <TextField
            label="Balance"
            placeholder="Enter amount"
            value={balance}
            onChange={this.handleChange('balance')}
            margin="normal"
          />
          <br />
          {
            this.props.transType === 'Income'
              ? null
              : <Fragment>
                  <TextField
                      select
                      label="Category"
                      value={category}
                      onChange={this.handleChange('category')}
                      helperText="Please select category"
                      margin="normal"
                  >
                    {CATEGORIES.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                  <br />
                </Fragment>
          }
          <Button
            color="primary"
            variant="raised"
            onClick={this.handleAddTransaction}
          >
            Create
          </Button>
        </form>
      </Paper>
    )
  }
}
