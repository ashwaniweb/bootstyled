import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Svg from './icons';

const TooltipToolWrap = styled.div`
  width: 182px;
  min-height: 172px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #6f6f70;
  position: absolute;
  left: 63px;
  top: -56px;
  z-index:2;
  &:after {
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(255, 255, 255, 0);
    border-right-color: #ffffff;
    border-width: 15px;
    margin-top: -16px;
  }
  &:before{
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(111, 111, 112, 0);
    border-right-color: #6f6f70;
    border-width: 16px;
    margin-top: -16px;
  }
  }
  .titleBox {
    color: #ffffff;
    background: #00658a;
    display: flex;
    align-items: center;
    min-height: 50px;
    div:first-child {
      font-size: 32px;
      width: 62px;
      text-align: center;
    }
    div:last-child {
      width: auto;
      font-size: 12px;
    }
  }
  .innerContainer {
    padding: 15px;
    min-height: 96px;
    p {
      font-size: 13px;
      text-align: left;
      color: #272727;
    }
  }
  .learnMore {
    color:#0084ba;
    font-size: 14px;
    padding: 0;
    margin-right: 15px;
    display: inline-block;
    float: right;
    font-weight: bold;
  }
`;

const TooltipTool = ({
  placement,
  icon,
  heading,
  text,
  button,
  children,
  toLink,
}) => {
  return (
    <div>
      {children}
      <TooltipToolWrap>
        <div className="titleBox">
          <div>
            <Svg icon={icon} />
          </div>
          <div>{heading}</div>
        </div>
        <div className="innerContainer">
          <p>{text}</p>
        </div>
        <Link className="learnMore" to={toLink}>
          Learn More
        </Link>
      </TooltipToolWrap>
    </div>
  );
};
export default TooltipTool;
