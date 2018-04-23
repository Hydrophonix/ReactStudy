import React, { Component } from 'react';

export default hocProps => WrappedComponent => {
    return class extends Component {
        render() {
            if (hocProps(this.props)) {
                return (
                    <WrappedComponent {...this.props} />
                );
            } else {
                return null;
            }
        }
    };
};
