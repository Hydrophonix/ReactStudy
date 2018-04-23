import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shouldComponentRender from '../hoc/shouldComponentRender.jsx';

export default shouldComponentRender(props => props.isLoaded)(class extends Component {
    static propTypes = {
        isLoaded: PropTypes.bool
    }

    render() {
        return (
            <h3>Last Component</h3>
        );
    }
});
