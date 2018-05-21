import React from 'react';
import Svg from './icons';
import TooltipTool from './tooltipTools';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Box from './box';

const Wrap = styled.div`
  width: 62px;
  height: 100%;
  min-height: 1040px;
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
  transition: all 0.5s ease;
  float: left;
  box-shadow: rgba(8, 8, 8, 0.06) 3px 2px 8px 0px;
  &.active {
    left: -61px;
    transition: all 0.5s ease;
  }
  span {
    color: #fff;
    font-size: 12px;
    background: #004564;
    display: block;
    text-align: center;
    padding: 2px 0;
  }
  .arrow {
    color: #156691;
    font-size: 25px;
    background: #ffffff;
    border: none;
    width: 26px;
    height: 74px;
    position: absolute;
    right: -26px;
    top: 71px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    box-shadow: rgba(8,8,8,0.06) 3px 2px 8px 0px;
  }
  .arrow:focus {
    outline: none;
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      padding: 0;
      position: relative;
      & > a {
        font-size: 46px;
        color: #166590;
        padding: 8px 0;
        box-sizing: border-box;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      }
      a.active {
        border-left: 4px solid #166590;
        padding-right: 4px;
      }
      & > div {
        display: none;
      }
    }
    li:hover {
      & > a {
        color: #ffffff;
        background: #166590;
        border-left: 4px solid #00648e;
      }
      & > div {
        display: block;
      }
    }
  }
`;

const Tools = ({ clickArrow, toolBarToggle }) => (
  <Wrap className={toolBarToggle ? 'active' : ''}>
    <span>Tools</span>
    <ul>
      <li>
        <NavLink to="/ab">
          <Svg icon="download_doc" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/ac">
          <Svg icon="sub_user" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/ad">
          <Svg icon="feedback_icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/ae">
          <Svg icon="my_services" />
        </NavLink>
        <TooltipTool
          icon="my_services"
          heading="My Services"
          text="You can set your services by clicking on this"
          toLink="/home"
        />
      </li>
      <li>
        <NavLink to="/af">
          <Svg icon="meetings_icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/ag">
          <Svg icon="did_icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/ah">
          <Svg icon="preaccount_icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/ai">
          <Svg icon="invoices_icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/aj">
          <Svg icon="provisioning_icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/ak">
          <Svg icon="accountmanagement_icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/al">
          <Box is={Svg} icon="servicemanagement_icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/am">
          <Svg icon="chanelmanagement_icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/an">
          <Svg icon="salesreport_icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/ao">
          <Svg icon="createdemo_icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/ap">
          <Svg icon="salesreport1_icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/aq">
          <Svg icon="customer_list" />
        </NavLink>
      </li>
    </ul>
    <button className="arrow" onClick={clickArrow}>
      {toolBarToggle ? '»' : '«'}
    </button>
  </Wrap>
);

export default Tools;
