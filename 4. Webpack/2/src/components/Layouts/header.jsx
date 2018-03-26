import React from 'react';
import createReactClass from 'create-react-class';
import { Typography } from 'material-ui';
import { AccountBalanceWallet } from 'material-ui-icons';

const Header = createReactClass({
  render() {
    return (
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
    )
  }
});

export default Header;
