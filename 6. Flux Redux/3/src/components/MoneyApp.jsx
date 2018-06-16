import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { CssBaseline, AppBar, Toolbar, Typography, Button } from 'material-ui'
import { AddCircleOutline, RemoveCircleOutline, KeyboardBackspace } from 'material-ui-icons'

import { Footer, Header } from './Layouts'
import Grid from './Grid.jsx'
import Editor from './Editor.jsx'


const styles = {
  fontSize: 40,
  color: "#fff"
}

const mapStateToProps = state => ({
  transactions: state.transactions
})

@hot(module)
@connect(mapStateToProps)
export default class extends Component {
  constructor() {
    super()

    this.handleEditorIncome = ::this.handleEditorIncome
    this.handleEditorOutcome = ::this.handleEditorOutcome
    this.handleBack = ::this.handleBack
  }

  state = {
    editorType: false
  }

  handleEditorIncome() {
    this.setState({ editorType: "Income"})
  }

  handleEditorOutcome() {
    this.setState({ editorType: "Outcome"})
  }

  handleBack() {
    this.setState({ editorType: false })
  }

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
                      {this.props.transactions.reduce((amount, item) =>
                        amount += item.amount, 0)}
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
                transType={this.state.editorType}
                onClose={this.handleBack}
              />
            : <Grid />
        }
        <Footer />
      </Fragment>
    )
  }
}
