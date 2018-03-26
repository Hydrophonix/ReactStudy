import React, { Fragment } from 'react'
import createReactClass from 'create-react-class'
import { Paper, TextField, Select, Button, Typography } from 'material-ui'
import { MenuItem } from 'material-ui/Menu'

const CATEGORIES = ['Shopping', 'Food', 'Entertainment', 'Other']


const Editor = createReactClass({
  getInitialState() {
    return {
      description: '',
      category: '',
      balance: ''
    }
  },

  handleAddTransaction() {
    const { description, category, balance} = this.state;
    const newTrans = {
      name: description,
      category: category || this.props.transType,
      balance: this.props.transType === 'Outcome' ? -balance : +balance,
      date: Date.now()
    };

    this.props.onTransAdd(newTrans);
    this.resetState();
  },

  handleChange(name) {
    return ({ target: { value }}) =>
      this.setState({
        [name]: value
      })
  },

  resetState() {
    this.setState({
      description: '',
      category: '',
      balance: 0
    })
  },

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
});

export default Editor
