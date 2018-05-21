import React from 'react';
import { Button } from '../button';
import Modal, { ModalBody, ModalHeader, ModalFooter } from './index';
import { Row, Col } from '../../styledComponents/layout';
import Title from '../../styledComponents/Heading';
import Box from '../box';
import RadioCheckbox from '../radioCheckbox';
import SidebarData from '../../helper/sidebarData';
import Scrollbars from '../scrollbar';

const AddContact = ({ closeModal }) => {
  let data = [
    { name: 'Aarushi Khanna', contact: '123-456-7890' },
    { name: 'Aanchal Malhotra', contact: '123-456-7890' },
    { name: 'Deepika Srivastava', contact: '123-456-7890' },
    { name: 'Hema Thakur', contact: '123-456-7890' },
    { name: 'Kanika Jagga', contact: '123-456-7890' },
    { name: 'Sonia Kaur', contact: '123-456-7890' },
    { name: 'Ajay Kumar', contact: '123-456-7890' },
    { name: 'Ashwani Kumar', contact: '123-456-7890' },
    { name: 'Ajit Kumar', contact: '123-456-7890' },
    { name: 'Ankit Gupta', contact: '123-456-7890' },
    { name: 'Kaushal Solanki', contact: '123-456-7890' },
  ];

  let data1 = [
    { name: 'Audio Conferencing' },
    { name: 'Audio Conferencing' },
    { name: 'Audio Conferencing' },
    { name: 'Audio Conferencing' },
    { name: 'Audio Conferencing' },
    { name: 'Audio Conferencing' },
    { name: 'Audio Conferencing' },
    { name: 'Audio Conferencing' },
    { name: 'Audio Conferencing' },
    { name: 'Audio Conferencing' },
    { name: 'Audio Conferencing' },
    { name: 'Audio Conferencing' },
  ];

  return (
    <Modal width="1000px">
      <ModalHeader>
        <Title primary align="left" fz="32px" thin="500">
          Assign Services
        </Title>
      </ModalHeader>
      <ModalBody>
        <Box is={Row}>
          <Box is={Col} xs={12} sm={12} md={6} lg={6}>
            <Box
              is={Title}
              primary
              align="left"
              fz="22px"
              thin="500"
              py="20"
              my="0"
              css="border-bottom: 2px solid #eee"
            >
              List of Participants
            </Box>
            <Box>
              <Box
                is={RadioCheckbox}
                type="checkbox"
                css="border-bottom: 2px solid #eee"
                py="15px"
              >
                <Box is="h2" c="#0085bf" fz="14" mb="0">
                  Select All
                </Box>
              </Box>
              <Box is={Scrollbars} style={{ width: 475, height: 300 }}>
                <Box px="15">
                  {data.map((data, i) => (
                    <SidebarData
                      key={i}
                      name={data.name}
                      contact={data.contact}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box is={Col} xs={12} sm={12} md={6} lg={6}>
            <Box
              is={Title}
              primary
              align="left"
              fz="22px"
              thin="500"
              py="20"
              my="0px"
              css="border-bottom: 2px solid #eee"
            >
              Assign Services
            </Box>
            <Box>
              <Box
                is={RadioCheckbox}
                type="checkbox"
                css="border-bottom: 2px solid #eee"
                py="15px"
              >
                <Box is="h2" c="#0085bf" fz="14" mb="0">
                  Select All
                </Box>
              </Box>
              <Scrollbars style={{ width: 475, height: 300 }}>
                <Box px="15">
                  {data1.map((data1, i) => (
                    <SidebarData key={i} name={data1.name} />
                  ))}
                </Box>
              </Scrollbars>
            </Box>
          </Box>
        </Box>
      </ModalBody>
      <ModalFooter>
        <Box right mt="15px">
          <Button onClick={() => closeModal()}>Cancel</Button>
          <Button primary>Assign Services</Button>
        </Box>
      </ModalFooter>
    </Modal>
  );
};
export default AddContact;
