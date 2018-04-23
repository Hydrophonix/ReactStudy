import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onlyUpdateForKeys from '../hoc/onlyUpdateForKeys.jsx';

const styles = {
    wrapper: {
        display: 'flex'
    },
    button: {
        padding: 10
    },
    box: {
        width: 40,
        height: 40
    }
};

export default onlyUpdateForKeys([ 'color' ])(class extends Component {
    static propTypes = {
        color: PropTypes.string,
        colorChange: PropTypes.func
    }

    handleColorChange = e =>
        e.target.tagName === 'BUTTON'
        && this.props.colorChange(e.target.textContent)

    render() {
        const { color } = this.props;

        return (
            <div style={styles.wrapper} onClick={this.handleColorChange}>
                <button style={styles.button}>RED</button>
                <div style={{ ...styles.box, backgroundColor: color }}/>
                <button style={styles.button}>BLUE</button>
            </div>
        );
    }
});
