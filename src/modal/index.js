import React, { Component, Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import media from '../media'

const fadeDown = keyframes`
from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`

const ModalWrap = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 15px;
  display: flex;
  align-items: center;
`

export const ModalContent = styled.div`
  background-color: #fff;
  margin: auto;
  border: 1px solid #888;
  width: 100%;
  border-radius: ${props => (props.bdr ? props.bdr : '0px')};
  ${media.tablet`
  
    max-width: ${props => (props.width ? props.width : '75%')};

    `} box-shadow: 0 0 1px 2px #00000021;

  &.fade-enter {
    animation-duration: 0.5s;
    animation-fill-mode: both;
  }
  &.fade-enter-active {
    animation-name: ${fadeDown};
  }
`

export const ModalBody = styled.div`
  padding: 15px;
`

export const ModalHeader = styled.div`
  padding: 9px 15px;
  background-color: #fff;
`
export const ModalFooter = styled.div`
  background: #fff;
  padding: 20px;
`

export default class Modal extends Component {
  state = {
    show: false
  }
  componentDidMount () {
    this.setState({ show: true })
    document.querySelector('body').style.overflow = 'hidden'
  }
  componentWillUnmount () {
    document.querySelector('body').style.overflow = ''
  }

  render () {
    const { children, width, bdr, ...props } = this.props
    return (
      <ModalWrap {...props}>
        <ReactCSSTransitionGroup
          transitionName='fade'
          component={Fragment}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.state.show &&
            <ModalContent width={width} bdr={bdr}>
              {children}
            </ModalContent>}
        </ReactCSSTransitionGroup>
      </ModalWrap>
    )
  }
}
