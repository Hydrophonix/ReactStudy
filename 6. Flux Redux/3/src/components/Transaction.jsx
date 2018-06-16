import React, { Component, Fragment } from 'react'
import { Paper, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction } from 'material-ui'
import { ArrowDownward, Restaurant, LocalActivity, LocalGroceryStore, Reorder } from 'material-ui-icons'

const OPTIONS = {
  day: '2-digit',
  month: 'short',
};

const STYLE = {
  Shopping: {
    Avatar: <LocalGroceryStore/>,
    style: { backgroundColor: 'pink' }
  },
  Food: {
    Avatar: <Restaurant/>,
    style: { backgroundColor: 'blue' }
  },
  Entertainment: {
    Avatar: <LocalActivity/>,
    style: { backgroundColor: 'orange' }
  } ,
  Other: {
    Avatar: <Reorder/>,
    style: { backgroundColor: 'grey' }
  },
  Income: {
    Avatar: <ArrowDownward/>,
    style: { backgroundColor: 'green' }
  }
}

export default class extends Component {
  render() {
    const { date, name, amount, category } = this.props;
    const color = amount < 0 ? 'red' : 'green';
    return (
      <ListItem style={{borderBottom: "1px solid grey"}}>
        <ListItemAvatar>
          <Avatar style={STYLE[category].style}>
            {STYLE[category].Avatar}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={new Date(date).toLocaleString('ru', OPTIONS)}
        />
        <ListItemSecondaryAction
          style={{color: color}}
        >
          {amount}
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}
