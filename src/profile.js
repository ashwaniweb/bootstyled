import styled from 'styled-components';
export const ProfileImg = styled.img`
  position: relative;
  &:after {
    position: absolute;
    z-index: 1;
    left: -20px;
    width: 20px;
    height: 20px;
  }
`;
export const ArrowBottom = styled.div`
  position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #f00;
  &:after {
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 40px solid #000000;
    width: 0;
    height: 0;
    z-index: 9999999;
  }
`;
