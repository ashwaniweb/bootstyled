import styled from 'styled-components';

export default styled.h2`
  color: ${props => (props.primary ? '#0085bf' : '#666')};
  font-size: ${props => (props.fz ? props.fz : '14px')};
  font-weight: ${props => (props.thin ? props.thin : '500')};
  text-transform: ${props => props.capitalize && 'capitalize'};
  margin: ${props => (props.m ? props.m : '10px 0')};
  text-align: ${props => (props.align ? props.align : 'unset')};
  letter-spacing: normal;
  line-height: ${props => (props.h ? '44px' : '20px')};
`;

export const Breadcrumb = styled.ul`
  padding: 10px 16px;
  list-style: none;
  li {
    color: #1587da;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    a {
      color: #888 !important;
    }
  }
  li:after {
    border: 1px solid #888;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 2px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    content: '';
    margin: 0px 10px;
  }
  li:last-child:after {
    content: '';
    border: 0px;
  }
`;

export const Square = styled.div`
  height: 150px;
  width: 250px;
  border: 1px solid #0085bf;
  border-radius: 5px;
`;
