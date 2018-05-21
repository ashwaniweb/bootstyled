import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
export const DropdownWrap = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  & .btn {
    display: flex;
    cursor: pointer;
    font-weight: 400;
    text-align: left;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    height: 48px;
    border-radius: 5px;
    width: 100%;
    overflow: hidden;
    line-height: 1.5;
    color: #555;
    background-color: #fff;
    border: 2px solid #d9d9d9;
    align-items: center;
    justify-content: space-between;
    &.btn: focus {
      border: 2px solid #0085bf;
      outline: none;
    }
    &.dropdown-toggle {
      &:after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: '';
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-bottom: 0;
        border-left: 0.3em solid transparent;
      }
    }
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:not(:last-child):not(.dropdown-toggle) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  & > ul {
    position: absolute;
    width: 100%;
    z-index: 2;
    cursor: pointer;
    background: white;
    list-style: none;
    padding: 0;
    margin: 0;
    top: calc(100% + 10px);
    border: solid 2px #d9d9d9;
    border-radius: 5px;
    ${({ align }) => {
      if (align === 'left') {
        return css`
          left: 0;
        `
      } else if (align === 'right') {
        return css`
          right: 0;
        `
      } else {
        return css`
          left: 0;
        `
      }
    }} & > li {
      /* float: left;
      width: 100%; */
      margin: 0 -1px;
      font-size: 14px;
      color: #666;
      font-weight: 600;
      /* border: 1px solid #d4d0d0; */
      border-top: none;
      padding: 10px 20px;
      &.active,
      &:hover {
        color: #fff;
        background: #0085bf;
        border-color: #0085bf;
      }
      & > span {
      }
      & > i {
        color: #ddd;
      }
    }
  }
`

export class Dropdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listVisible: false,
      items: ['lorem', 'ipsum', 'dolor'],
      cursor: 0
    }
    this.closeDropdown = this.closeDropdown.bind(this)
  }

  selectItem (e, item) {
    e.preventDefault()
    if (item) {
      this.props.onChange(item)
    }
    this.setState(
      {
        listVisible: !this.state.listVisible
      },
      () => {
        document.addEventListener('click', this.closeDropdown)
      }
    )
  }

  closeDropdown () {
    this.setState({ listVisible: false }, () => {
      document.removeEventListener('click', this.closeDropdown)
    })
  }
  componentWillUnmount () {
    document.removeEventListener('click', this.closeDropdown)
  }

  handleKeyDown (e) {
    e.preventDefault()

    const { cursor } = this.state
    const { list } = this.props
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState(prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (e.keyCode === 40 && cursor < list.length - 1) {
      this.setState(prevState => ({
        cursor: prevState.cursor + 1
      }))
    } else if (e.keyCode === 13) {
      this.selectItem(e, list[cursor])
    }
  }
  handleHover (item) {
    this.setState({ cursor: this.props.list.findIndex(a => a.id === item.id) })
  }

  renderListItems () {
    const items = []
    this.props.list.map((item, i) =>
      items.push(
        <li
          key={item.id}
          onClick={e => this.selectItem(e, item)}
          className={this.state.cursor === i ? 'active' : null}
          onMouseOver={() => this.handleHover(item)}
        >
          <span value={item.id}>{item.value}</span>
        </li>
      )
    )
    return items
  }
  render () {
    let { align, list, ...props } = this.props
    return (
      <DropdownWrap {...props} align={align}>
        {this.props.Split === true
          ? <Fragment>
            <button type='button' className='btn'>
              {this.props.selected.value}
            </button>
            <button
              type='button'
              className='btn dropdown-toggle dropdown-toggle-split'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
              onKeyDown={e => this.handleKeyDown(e)}
              onClick={e => this.selectItem(e, null)}
              />
          </Fragment>
          : <Fragment>
            {this.props.type === 'button'
                ? <button
                  className='btn btn-danger dropdown-toggle'
                  onClick={e => this.selectItem(e, null)}
                  onKeyDown={e => this.handleKeyDown(e)}
                  >
                  {this.props.selected.value}
                </button>
                : this.props.type === 'image'
                    ? <div
                      tabIndex={'1'}
                      onClick={e => this.selectItem(e, null)}
                      onKeyDown={e => this.handleKeyDown(e)}
                      >
                      <img src={this.props.title} alt='' />
                    </div>
                    : <span
                      tabIndex={'1'}
                      onClick={e => this.selectItem(e, null)}
                      onKeyDown={e => this.handleKeyDown(e)}
                      >
                      {this.props.selected.value}
                    </span>}
          </Fragment>}
        {this.state.listVisible && <ul>{this.renderListItems()}</ul>}
      </DropdownWrap>
    )
  }
}
