import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Anchor = styled(NavLink)`
  border: none;
  text-decoration: none;
  border-bottom: none;
  color: #fff;
  transition: 0.2s ease-out;
  cursor: pointer;
  font-family: $proxima-nova;
  font-size: 12px;
  padding: 12px 30px;
  display: block;
  white-space: nowrap;
  @media (max-width: 950px) {
    font-size: 13px;
  }
  &:hover {
    text-decoration: none;
    color: #ffffff;
    @media (max-width: 600px) {
      display: block;
    }
  }
  &.active {
    background: #005d86;
    color: #fff;
  }
`;
export const Nav = styled.nav`
  background-color: #0085bf;
`;

export const NavWrap = styled.ul`
  list-style: none;
  padding-left: 0px;
  position: relative;
  margin: 0px;
`;
export const Item = styled.li`
  position: relative;
  display: inline-block;
  transition: 0.2s ease-out;
  font-family: $soch_sans_serif;
  text-align: center;
  @media (max-width: 950px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 700px) {
    padding: 1.5rem 0.65rem;
  }
`;
export const SubNavWrap = NavWrap.extend`
  background-color: #fff;
  position: absolute;
  width: 100%;
  right: 1px;
  top: calc(100% + 10px);
  border: solid 2px #d9d9d9;
  border-radius: 5px;
  z-index: 55;

  ${Anchor} {
    color: #666;
    font-weight: 600;
    text-align: left;
    display: block;
    padding: 12px 10px;
    white-space: normal;
    &.active {
      background: #005d86;
      color: #fff;
    }
  }
  ${Item} {
    display: block;
  }
  &.slide-enter {
    max-height: 0;
    overflow: hidden;
    transition: all 1s;
  }
  &.slide-enter-active {
    max-height: 400px;
  }
  &.slide-leave {
    max-height: 400px;
    overflow: hidden;
    transition: all 0.3s;
  }
  &.slide-leave-active {
    max-height: 0px;
  }
`;
