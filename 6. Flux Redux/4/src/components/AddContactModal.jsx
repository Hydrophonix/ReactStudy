import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button
} from '@material-ui/core'
import { AddCircleOutline } from '@material-ui/icons'

export default class extends Component {
  static propTypes = {
      addContact: PropTypes.func,
  }

  state = {
    open: false,
    name: '',
    email: ''
  }

  handleToggle = () =>
    this.setState(({ open }) => ({
      open: !open
    }))

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    })

  handleAddContact = () => {
    const { name, email } = this.state
    this.props.addContact(name, email)
    this.setState({
      open: false,
      name: '',
      email: ''
    })
  }

  render() {
    const { open, name, email } = this.state

    return(
      <Fragment>
        <IconButton color="inherit" onClick={this.handleToggle}>
          <AddCircleOutline style={{ fontSize: 36 }}/>
        </IconButton>

        <Dialog
          open={open}
          onClose={this.handleToggle}
        >
          <DialogTitle>
            Add a new contact
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the from below
            </DialogContentText>
            <form>
              <TextField
                label="Name"
                value={name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
              <br />
              <TextField
                label="Email"
                value={email}
                onChange={this.handleChange('email')}
                margin="normal"
              />
              <br />
              <Button
                color="primary"
                variant="raised"
                onClick={this.handleAddContact}
              >
                Add contact
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </Fragment>
    )
  }
}
