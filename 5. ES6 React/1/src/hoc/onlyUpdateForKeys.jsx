import React, { Component } from 'react';

export default hocProps => WrappedComponent => {
    return class extends Component {
        shouldComponentUpdate = nextProps =>
            hocProps.some(item => nextProps[item] !== this.props[item])

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    };
};
