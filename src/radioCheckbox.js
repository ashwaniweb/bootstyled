import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrap = styled.label`
  user-select: none;
  display: flex;
  align-items: center;
  padding: 1%;
  input {
    display: none;
    &:checked + span {
      background: #0085c0;
      border-color: #0085c0;
    }
    &:checked + span:after {
      content: '';
      left: 6px;
      top: 2px;
      position: absolute;
      width: 5px;
      height: 10px;
      display: block;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
  span {
    display: inline-block;
    position: relative;
    width: 18px;
    height: 18px;
    background: #ffffff;
    border: 1px solid #d4d0d0;
    border-radius: 4px;
    margin-right: 15px;
  }
  ${props =>
    props.type === 'checkbox'
      ? css`
          color: #b3b3b3;
          font-weight: 500;
          font-size: 14px;
          padding-top: 10px;
          padding-bottom: 10px;
          &:after {
          }
        `
      : css`
          input {
            display: none;
            &:checked + span {
              background: #fff;
              border-color: #0085c0;
              border-radius: 50%;
            }
            &:checked + span:after {
              content: '';
              left: 2px;
              top: 2px;
              position: absolute;
              width: 10px;
              height: 10px;
              background: #0085c0;
              display: block;
              border: none;
              border-radius: 50%;
            }
          }
          span {
            display: inline-block;
            position: relative;
            width: 18px;
            height: 18px;
            background: #ffffff;
            border: 2px solid #f0f0f0;
            border-radius: 50%;
            margin-right: 15px;
          }
        `};
`;

const RadioCheckbox = ({ type, name, children, className, ...props }) => {
  return (
    <Wrap type={type} className={className}>
      <input type={type} name={name} {...props} />
      <span />
      {children}
    </Wrap>
  );
};

RadioCheckbox.defaultProps = {
  type: 'checkbox',
  className: '',
};
RadioCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default RadioCheckbox;
