import React, { Component } from 'react';
export default ({ prop = 'is', omit = [] } = {}) => {
  return class Tag extends Component {
    render() {
      const { children, ...otherProps } = this.props;
      const tag = otherProps[prop];
      const omitPropsKeys = [prop, 'css', ...omit];
      const props = Object.keys(otherProps).reduce((prev, next) => {
        if (omitPropsKeys.includes(next)) {
          return prev;
        } else {
          prev[next] = otherProps[next];
          return prev;
        }
      }, {});
      return React.createElement(tag, props, children);
    }
  };
};
