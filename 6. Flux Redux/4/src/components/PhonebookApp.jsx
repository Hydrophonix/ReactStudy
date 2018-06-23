import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  IconButton
} from '@material-ui/core'
import { ViewList, ViewModule } from '@material-ui/icons'


import Contact from './Contact.jsx'
import AddContactModal from './AddContactModal.jsx'

import { addContact, toggleFavorite, setFiltering } from '../actions'
const styles = {
  root: {
    width: 900,
    margin: 'auto',
  },
  flex: {
    flex: 1,
  },
  grid: {
    padding: 10,
    marginTop: 10,
  },
  nav: {
    borderTop: '5px double #3f51b5'
  }
};

const mapStateToProps = state => ({
  contacts: filterFunc(state.contacts, state.filtering)
})

function filterFunc(contacts, filter) {
  switch (filter) {
    case 'SHOW_FAVORITE':
      return contacts.filter(item => item.favorite)

    case 'SHOW_ALL':
    default:
      return contacts
  }
}

@hot(module)
@withStyles(styles)
@connect(mapStateToProps, { addContact, toggleFavorite, setFiltering })
export default class extends Component {
  static propTypes = {
      classes: PropTypes.object.isRequired,
      contacts: PropTypes.array,
      addContact: PropTypes.func,
      toggleFavorite: PropTypes.func,
      setFiltering: PropTypes.func
  }

  state = {
    value: 0,
    sm: false
  }

  handleChange = (event, value) => {
    this.props.setFiltering(event.target.name)
    this.setState({ value })
  }

  handleSetGrid = e => {
    switch (e.target.name) {
      case 'cards':
        this.setState({ sm: 6 })
        break

      case 'list':
      default:
        this.setState({ sm: false })
    }
  }

  render() {
    const { contacts, classes, addContact, toggleFavorite } = this.props
    const { value, sm } = this.state

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              PhonebookApp
            </Typography>
            <IconButton color="inherit" onClick={this.handleSetGrid} name="cards">
              <ViewModule style={{ fontSize: 36 }}/>
            </IconButton>
            <IconButton color="inherit" onClick={this.handleSetGrid} name="list">
              <ViewList style={{ fontSize: 36 }}/>
            </IconButton>
            <AddContactModal addContact={addContact}/>

          </Toolbar>
        </AppBar>
        <Paper className={classes.grid}>
          <Grid container spacing={24}>
              {contacts.map(item =>
                <Grid item xs={12} sm={sm} key={item.id}>
                  <Contact
                      id={item.id}
                      name={item.name}
                      email={item.email}
                      favorite={item.favorite}
                      toggleFavorite={toggleFavorite}
                  />
                </Grid>
              )}
          </Grid>
        </Paper>
        <Paper>
          <BottomNavigation
            value={value}
            onChange={this.handleChange}
            showLabels
            className={classes.nav}
          >
            <BottomNavigationAction label="All" name="SHOW_ALL"/>
            <BottomNavigationAction label="Favorites" name="SHOW_FAVORITE"/>
          </BottomNavigation>
        </Paper>
      </div>
    )
  }
}
