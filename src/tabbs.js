import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';

export const TabUl = styled.ul`
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
`;

export const TabLi = styled.li`
  display: inline-block;
  a {
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
    color: #333;
    padding: 10px 15px;
    position: relative;
    display: block;
    transition: background 0.3s;
    &:hover {
      background: #f2f2f2;
    }
    ${props =>
      props.active &&
      css`
        color: #555;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-color: transparent;
        cursor: default;
        &:hover {
          background: #fff;
        }
      `};
  }
`;
export const TabContents = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 0 0 4px 4px;
  margin-top: -1px;
`;

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: props.defaultOpen,
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  // Toggle currently active tab
  handleTabClick(tabIndex) {
    this.setState({
      activeTabIndex: tabIndex,
    });
  }

  // Encapsulate <Tabs/> component API as props for <Tab/> children
  renderChildrenWithTabsApiAsProps() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex,
      });
    });
  }

  // Render current active tab content
  renderActiveTabContent() {
    const { children } = this.props;
    const { activeTabIndex } = this.state;
    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  }

  render() {
    return (
      <Fragment>
        <TabUl>{this.renderChildrenWithTabsApiAsProps()}</TabUl>
        <TabContents>{this.renderActiveTabContent()}</TabContents>
      </Fragment>
    );
  }
}

export const Tab = props => {
  return (
    <TabLi active={props.isActive}>
      <a
        href="/"
        onClick={e => {
          e.preventDefault();
          props.onClick(props.tabIndex);
        }}
      >
        {props.title}
      </a>
    </TabLi>
  );
};
