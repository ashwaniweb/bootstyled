import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from './tag';
import cssEmbed from './css';

const propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  underline: PropTypes.bool,
  block: PropTypes.bool,
  inline: PropTypes.bool,
  flex: PropTypes.bool,
  my: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  mx: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  ml: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  mb: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  mr: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  mt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  py: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  px: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  pl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  pb: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  pr: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  pt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  fz: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  w: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  c: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  bg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  m: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  alignItems: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  justifyContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
};

const defaultProps = {
  is: 'div',
  left: false,
  right: false,
  center: false,
  bold: false,
  italic: false,
  underline: false,
  block: false,
  inline: false,
  flex: false,
  my: '',
  mx: '',
  ml: '',
  mb: '',
  mr: '',
  mt: '',
  py: '',
  px: '',
  pl: '',
  pb: '',
  pr: '',
  pt: '',
  fz: '',
  w: '',
  c: '',
  bg: '',
  m: '',
  p: '',
  alignItems: '',
  justifyContent: '',
};

const BoxView = Tag({
  omit: Object.keys(defaultProps).reduce((prev, next) => {
    prev.push(next);
    return prev;
  }, []),
});

const BoxWrap = styled(BoxView)`
  && {
    ${props => props.css()};
  }
`;

const Box = ({
  is,
  css,
  left,
  right,
  center,
  bold,
  italic,
  underline,
  m,
  my,
  mx,
  ml,
  mb,
  mr,
  mt,
  p,
  py,
  px,
  pl,
  pb,
  pr,
  pt,
  fz,
  w,
  c,
  bg,
  block,
  inline,
  flex,
  alignItems,
  justifyContent,
  nowrap,
  ...props
}) => {
  let cssProp = {
    css,
    'text-align:left;': left,
    'text-align:right;': right,
    'text-align:center;': center,
    'font-weight:bold;': bold,
    'font-style:italic;': italic,
    'text-decoration:underline;': underline,
    'display:block;': block,
    'display:inline-block;': inline,
    'display:flex;flex-wrap:wrap;': flex,
    'flex-wrap:nowrap;': nowrap,
    my,
    mx,
    ml,
    mb,
    mr,
    mt,
    py,
    px,
    pl,
    pb,
    pr,
    pt,
    fz,
    w,
    c,
    bg,
    m,
    p,
    alignItems,
    justifyContent,
  };
  return <BoxWrap is={is} css={() => cssEmbed(cssProp)} {...props} />;
};

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
