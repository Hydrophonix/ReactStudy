import React, { Component, Fragment } from 'react';

import First from '../components/First.jsx';
import Second from '../components/Second.jsx';
import Third from '../components/Third.jsx';

export default class AppContainer extends Component {
    state = {
        color: 'RED'
    }

    handleColorChange = color =>
        this.setState({ color: color })

    render() {
        return (
            <Fragment>
                <First foo="props from App" />
                <Second
                    color={this.state.color}
                    colorChange={this.handleColorChange}
                />
                <Third isLoaded={false}/>
            </Fragment>
        );
    }
}
