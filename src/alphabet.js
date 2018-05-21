import styled from 'styled-components';

export default Alphabet = styled.ul`
  padding-left: 0;
  li {
    list-style: none;
    line-height: 2;
    a {
      padding-top: 5px;
      display: block;
      text-decoration: none;
      color: #444;
      text-align: center;
      font-size: 15px;
      width: 30px;
      &:hover,
      &:active,
      &:visited {
        width: 30px;
      }
    }
  }
`;
