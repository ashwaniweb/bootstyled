import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: ${props => (props.bdr ? '2px solid #0085bf' : '2px solid #d9d9d9')};
  padding: 10px;
  letter-spacing: 1px;
  min-width: 130px;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;
  border-radius: 4px;
  outline: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #999;
  background-color: #fff;

  & + button {
    margin-left: 15px;
  }

  &:hover {
    border-color: #adadad;
    background-color: #fff;
  }
  &:focus {
    outline: 0;
  }
  ${({ primary }) =>
    primary &&
    css`
      color: #fff;
      background-color: #0085bf;
      &:hover {
        background-color: #0378ab;
        color: #ffffff;
      }
    `} ${({ success }) =>
    success &&
    css`
      background-color: #5cb85c;
      color: #ffffff;
      &:hover {
        background-color: #449d44;
      }
    `};
  ${({ danger }) =>
    danger &&
    css`
      background-color: #e95f5f;
      color: #ffffff;
      &:hover {
        background-color: #e65555;
      }
    `};
  ${({ gray }) =>
    gray &&
    css`
      background-color: #c3c3c3;
      color: #ffffff;
      &:hover {
        background-color: #aeaeae;
      }
    `};
`;
