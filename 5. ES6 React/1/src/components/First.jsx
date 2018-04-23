import React from 'react';
import PropTypes from 'prop-types';
import mapProps from '../hoc/mapProps.jsx';

const h1 = props => {
    const { bar } = props;

    return (
        <h1>{bar}</h1>
    );
};

h1.propTypes = {
    bar: PropTypes.string
};

export default mapProps({ foo: 'bar' })(h1);
