import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ToolTipText = styled.div`
  visibility: hidden;
  position: absolute;
  max-width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 10px;
  border-radius: 6px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.6s;

  &:after {
    content: '';
    position: absolute;
    border-width: 5px;
    border-style: solid;
  }
`;

const ToolTipWrap = styled.div`
  position: relative;
  display: inline-block;
  color: #555;
  ${({ placement }) => {
    if (placement === 'top') {
      return css`
        ${ToolTipText} {
          bottom: 125%;
          left: 50%;
          transform: translateX(-50%);
          &:after {
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-color: #555 transparent transparent transparent;
          }
        }
      `;
    } else if (placement === 'right') {
      return css`
        ${ToolTipText} {
          top: -5px;
          left: 125%;
          &:after {
            top: 50%;
            right: 100%;
            margin-top: -5px;
            border-color: transparent #555 transparent transparent;
          }
        }
      `;
    } else if (placement === 'left') {
      return css`
        ${ToolTipText} {
          top: -5px;
          bottom: auto;
          right: 128%;

          &:after {
            top: 50%;
            left: 100%;
            margin-top: -5px;
            border-color: transparent transparent transparent #555;
          }
        }
      `;
    } else if (placement === 'bottom') {
      return css`
        ${ToolTipText} {
          top: 135%;
          left: 50%;
          margin-left: -60px;
          &:after {
            bottom: 100%;
            left: 50%;
            margin-left: -5px;
            border-color: transparent transparent #555 transparent;
          }
        }
      `;
    }
  }} &:hover {
    ${ToolTipText} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const ToolTip = ({ text, placement, children, ...props }) => (
  <ToolTipWrap placement={placement} {...props}>
    {children}
    <ToolTipText>{text}</ToolTipText>
  </ToolTipWrap>
);

ToolTip.defaultProps = {
  placement: 'top',
};
ToolTip.propTypes = {
  placement: PropTypes.string,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ToolTip;
