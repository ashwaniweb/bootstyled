import React from 'react';
import { Row, Col, Container } from '../styledComponents/layout';
import styled from 'styled-components';
import Svg from '../styledComponents/icons';
import { Bages } from './badge';
import Input from './input';
import { ArrowBottom } from './profile';
import { Dropdown } from './dropdown';
import Box from './box';
const colours = [
  {
    id: '1',
    value: 'Red',
  },
  {
    id: '2',
    value: 'Blue',
  },
  {
    id: '3',
    value: 'Green',
  },
  {
    id: '4',
    value: 'Yellow',
  },
  {
    id: '5',
    value: 'Pink',
  },
  {
    id: '6',
    value: 'Black',
  },
];

export const TopDropDown = styled.div`
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-image: none;
  border: 2px solid #f5f5f5;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  background-color: #0185be;
  border-radius: 50px;
  float: left;
  width: 250px;
  border: 0;
  & > svg {
    color: #fff;
    font-size: 40px;
    background: #006490;
    border-radius: 50px 0 0 50px;
  }
  & > div {
    width: calc(100% - 50px);
    & > button.btn {
      height: 100%;
      background: #0185be;
      border: 0;
      color: #fff;
      width: 100%;
      float: left;
      margin: 0;
    }
  }
`;
export const UserMenu = styled.div`
  display: inline-block;
  & div > ul {
    min-width: 150px;
  }
`;
class Header extends React.Component {
  state = {
    selected: colours[0],
    selected2: colours[0],
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Box is={Col} md={4} flex css="align-items:center">
            <TopDropDown>
              <Svg icon="my_services" />
              <Dropdown
                list={colours}
                selected={this.state.selected}
                onChange={data => this.setState({ selected: data })}
                title={'Card Dropdown'}
                align={'left'}
                type={'button'}
                tabindex="0"
              />
            </TopDropDown>
          </Box>
          <Box
            is={Col}
            md={4}
            flex
            css="align-items:center;justify-content:center"
          >
            <Box>
              <img src="/images/logo.png" alt="logo" />
            </Box>
          </Box>

          <Col md={4}>
            <Box flex css="float:right;align-items:center">
              <Box w="250px" css="float:left">
                <Box
                  is={Input}
                  mb="0"
                  type="search"
                  value=""
                  onChange={() => {}}
                  name="search"
                />
              </Box>
              <Box w="150px" css="float:left">
                <Bages value={4}>
                  <Svg icon="bell" />
                </Bages>
                <Bages value={9}>
                  <Svg icon="calendar" />
                </Bages>
                <UserMenu className="userMenu">
                  <Dropdown
                    list={colours}
                    selected={this.state.selected}
                    onChange={data => this.setState({ selected: data })}
                    title={'/images/alex-parker.png'}
                    align={'right'}
                    type={'image'}
                    tabindex="0"
                  />
                </UserMenu>
                <ArrowBottom />
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
