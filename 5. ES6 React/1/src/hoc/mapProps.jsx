import React, { Component } from 'react';

export default hocProps => WrappedComponent => props => {
    const newProps = {};

    for (const key in props) {
        hocProps[key]
            ? newProps[hocProps[key]] = props[key]
            : newProps[key] = props[key];
    };

    return <WrappedComponent {...newProps} />;
};
