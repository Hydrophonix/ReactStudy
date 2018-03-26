import React, { Fragment } from 'react'
import createReactClass from 'create-react-class'
import { Paper, List, Radio, FormGroup, FormControlLabel } from 'material-ui'
import Transaction from './Transaction.jsx'

const FILTER = {
  All: item => item,
  Income: item => item.balance > 0,
  Outcome: item => item.balance < 0
};

const Grid = createReactClass({
  getInitialState() {
    return {
      selectedType: 'All'
    }
  },

  handleRadio(e) {
    this.setState({ selectedType: e.target.value })
  },

  render() {
    const { selectedType } = this.state;
    const { transactions } = this.props;
    return (
      <Paper style={{height: 600, overflowY: 'auto'}}>
        <FormGroup row style={{borderBottom: "2px solid black", padding: "0 10px"}}>
          <FormControlLabel
            control={
              <Radio
                checked={this.state.selectedType === 'All'}
                onChange={this.handleRadio}
                value="All"
                aria-label="A"
              />
            }
            label="All"
          />
          <FormControlLabel
            control={
              <Radio
                checked={this.state.selectedType === 'Income'}
                onChange={this.handleRadio}
                value="Income"
                aria-label="B"
              />
            }
            label="Income"
          /><FormControlLabel
            control={
              <Radio
                checked={this.state.selectedType === 'Outcome'}
                onChange={this.handleRadio}
                value="Outcome"
                aria-label="C"
              />
            }
            label="Outcome"
          />
        </FormGroup>
        <List>
          {
            transactions.filter(FILTER[selectedType]).map(item =>
              <Transaction
                key={item.date}
                date={item.date}
                name={item.name}
                amount={item.balance}
                category={item.category}
              />
            )
          }
        </List>
      </Paper>
    )
  }
});

export default Grid;
