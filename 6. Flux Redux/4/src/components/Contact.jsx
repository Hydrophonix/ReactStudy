import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { Star } from '@material-ui/icons'


const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
}

function ContactCard(props) {
  const { classes, name, email, favorite, id, toggleFavorite } = props

  return (
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">{name}</Typography>
            <Typography variant="subheading" color="textSecondary">
              {email}
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          <Button size="small">Message</Button>
          <IconButton
            color={favorite ? 'secondary' : 'default'}
            onClick={() => toggleFavorite(id)}
          >
            <Star />
          </IconButton>
        </CardActions>
      </Card>
  )
}

ContactCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  favorite: PropTypes.bool,
  toggleFavorite: PropTypes.func,
}

export default withStyles(styles)(ContactCard);
