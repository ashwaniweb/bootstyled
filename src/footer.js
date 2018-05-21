import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../styledComponents/box';

const Wrap = styled.div`
  background: #0085be;
  padding: 35px 30px 35px 65px;
  font-size: 12px;
  color: #fff;
  align-items: center;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  div {
    float: left;
    &:last-child {
      float: right;
    }
    a {
      border-right: 1px solid #b9d4e7;
      padding: 0 8px;
      color: #fff;
      &:last-child {
        border-right: none;
        padding-right: 0;
      }
      &::focus {
        outline: none;
      }
    }
  }
`;

const Footer = () => (
  <Wrap>
    <Box>SYNTHESIS © 2018</Box>
    <Box>
      <Link to="#">Terms and Conditions</Link>
      <Link to="#">Privacy Policy</Link>
    </Box>
  </Wrap>
);

export default Footer;
