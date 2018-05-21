import React, { Component } from 'react';
import styled from 'styled-components';
export const TabWrapper = styled.div`
  background: #fff;
  padding: 15px;
`;

export const TabList = styled.ul`
  padding-left: 0;
  list-style: none;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
  &::after {
    clear: both;
  }
  &::before,
  &::after {
    content: ' ';
    display: table;
  }
`;

export const Tab = styled.li`
  float: left;
  margin-bottom: -1px;
  & > span {
    margin-right: 2px;
    line-height: 1.42857143;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
    padding: 10px 15px;
    position: relative;
    display: block;
    &:hover {
      background: #0085bf;
      color: #fff;
      border-color: #0678ab;
    }
  }
  &.active {
    & > span {
      color: #555;
      background-color: #fff;
      border: 1px solid #ddd;
      border-bottom-color: transparent;
      cursor: default;
    }
  }
`;

export const TabContents = styled.div`
  background: #fff;
`;

export const TabContent = styled.div`
  background: #fff;
`;
export default class Tabs extends Component {
  constructor(props) {
    super();
    this.state = {
      tabActive: null,
    };
  }
  tabs(key) {
    this.setState({
      tabActive: key,
    });
  }
  render() {
    return (
      <TabWrapper>
        <TabList>
          {this.props.children.map(item => {
            return (
              <Tab
                key={item.props.eventKey}
                className={
                  ((!this.state.tabActive && item.props.active) ||
                    item.props.eventKey === this.state.tabActive) &&
                  'active'
                }
                onClick={() => this.tabs(item.props.eventKey)}
              >
                <span>{item.props.title}</span>
              </Tab>
            );
          })}
        </TabList>
        <TabContents>
          {this.props.children.map(item => {
            return (
              ((!this.state.tabActive && item.props.active) ||
                item.props.eventKey === this.state.tabActive) && (
                <TabContent key={item.props.eventKey}>
                  {item.props.children}
                </TabContent>
              )
            );
          })}
        </TabContents>
      </TabWrapper>
    );
  }
}
