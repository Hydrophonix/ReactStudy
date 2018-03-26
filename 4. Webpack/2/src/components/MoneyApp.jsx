import React, { Fragment } from 'react';
import createReactClass from 'create-react-class';
import { hot } from 'react-hot-loader';
import { CssBaseline, AppBar, Toolbar, Typography, Button } from 'material-ui';
import { AddCircleOutline, RemoveCircleOutline, KeyboardBackspace } from 'material-ui-icons';
import { Footer, Header } from './Layouts';
import Grid from './Grid.jsx';
import Editor from './Editor.jsx';


const styles = {
  fontSize: 40,
  color: "#fff"
}

const MoneyApp = createReactClass({
  getInitialState() {
    return {
      transactions: [],
      editorType: false
    }
  },

  componentDidMount() {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions'));

    savedTransactions && this.setState({ transactions: savedTransactions});
  },

  componentDidUpdate(prevProps, prevState) {
    (prevState.transactions !== this.state.transactions) && this.saveToLocalStorage()
  },

  handleEditorIncome() {
    this.setState({ editorType: "Income"})
  },

  handleEditorOutcome() {
    this.setState({ editorType: "Outcome"})
  },

  handleBack() {
    this.setState({ editorType: false })
  },

  handleTransactionAdd(newTransaction) {
    this.setState(state => ({
      transactions: [newTransaction, ...this.state.transactions],
      editorType: false
    }))
  },

  saveToLocalStorage() {
    const transactions = JSON.stringify(this.state.transactions);

    localStorage.setItem('transactions', transactions);
  },

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Header />
        <AppBar position="static">
          <Toolbar style={{justifyContent: "space-between"}}>
            {
              this.state.editorType
                ? <KeyboardBackspace
                    style={styles}
                    onClick={this.handleBack}
                  />
                : <Fragment>
                    <AddCircleOutline
                      style={styles}
                      onClick={this.handleEditorIncome}
                    />
                    <Typography variant="display2" style={{color: "#fff"}}>
                      {this.state.transactions.reduce((amount, item) =>
                        amount += item.balance, 0)}
                    </Typography>
                    <RemoveCircleOutline
                      style={styles}
                      onClick={this.handleEditorOutcome}
                    />
                  </Fragment>
            }
          </Toolbar>
        </AppBar>
        {
          this.state.editorType
            ? <Editor
              onTransAdd={this.handleTransactionAdd}
              transType={this.state.editorType}
              />
            : <Grid
              transactions={this.state.transactions}
              />
        }
        <Footer />
      </Fragment>
    )
  }
});

export default hot(module)(MoneyApp);
