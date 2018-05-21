import React, { Component } from 'react';
import { Button } from '../button';
import Title from '../../styledComponents/Heading';
import Modal, { ModalBody, ModalHeader, ModalFooter } from './index';
import { Label, FormGroup, FormControl } from '../../styledComponents/input';
import { Row, Col } from '../../styledComponents/layout';

class Mod extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal() {
    this.setState({
      show: true,
    });
  }

  closeModal() {
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <div>
        <Button primary onClick={this.showModal}>
          Modal Btn
        </Button>
        {this.state.show && (
          <Modal>
            <ModalHeader>
              <Title capitalize primary align="left">
                Add New Task
              </Title>
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <FormGroup>
                    <Label>First Name</Label>
                    <FormControl type="text" />
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button primary>Submit</Button>
              <Button onClick={this.closeModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
        )}
      </div>
    );
  }
}

export default Mod;
