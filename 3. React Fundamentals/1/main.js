const Bubble = React.createClass({
  getInitialState() {
    return {
      size: 30
    }
  },
  
  handleSize() {
    this.setState({size: (this.state.size === 285) ? this.state.size = 30 : this.state.size + 15})
  },

  render() {
    return (
      <div style={{
        margin: '0 auto',
        width: '300px',
        height: '300px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          margin: 150 - this.state.size/2 + 'px auto',
          width: this.state.size + 'px',
          height: this.state.size + 'px',
          border: '1px solid black',
          boxSizing: 'border-box',
          borderRadius: '300px',
          backgroundColor: 'black',
          transition: 'width .4s, height .4s, margin .4s'
        }}
        onClick={this.handleSize}>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <Bubble />,
  document.getElementById('root')
);
