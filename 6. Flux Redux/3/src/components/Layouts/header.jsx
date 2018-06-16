import React from 'react'
import { Typography } from 'material-ui'
import { AccountBalanceWallet } from 'material-ui-icons'

export const Header = props =>
  <div className="header">
    <AccountBalanceWallet
      color="primary"
      style={{ fontSize: 60 }}
    />
    <Typography
      variant="display3"
      style={{color: "#3f51b5"}}
    >
      MoneyApp
    </Typography>
  </div>
