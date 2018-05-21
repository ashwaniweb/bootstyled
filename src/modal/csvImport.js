import React from 'react';
import { Button } from '../button';
import Modal, { ModalBody, ModalFooter } from './index';
import { Row, Col } from '../../styledComponents/layout';
import Title from '../../styledComponents/Heading';
import Box from '../box';
import Svg from '../../styledComponents/icons';
export const CsvImport = ({ closeModal }) => {
  return (
    <Modal height="342px" width="490px">
      <ModalBody>
        <Box is={Row}>
          <Box is={Col} xs={12} sm={12} md={12} lg={12}>
            <Box
              is={Title}
              align="center"
              fz="20px"
              thin="700"
              pt="20"
              my="0"
              w={'100%'}
              c={'#6D6D6D'}
            >
              Filename.csv -{' '}
              <Box is={'span'} css={'font-weight: 500;'}>
                &nbsp;Sucessfully imported
              </Box>
            </Box>
          </Box>
        </Box>
        <Box is={Row}>
          <Box is={Col} xs={12} sm={12} md={12} lg={12} py="0">
            <Box
              css={
                'height: 130px; border: 1px solid #D6D6D6;background-color:#F8F8F8;border-radius:5px;padding:30px 15px;	text-align: center;width:90%;margin: 0 auto;'
              }
            >
              <Box is={'span'} css={'color:#0085BF'}>
                <Box
                  is={Svg}
                  icon="checked"
                  color="#00B44F"
                  size="22px"
                  css={'margin-top:-3px;'}
                />{' '}
                100
              </Box>{' '}
              of{' '}
              <Box is={'span'} css={'color:#0085BF'}>
                200
              </Box>{' '}
              contacts imported sucessfully
              <Box mt={'20px'}>
                <Box
                  is={Button}
                  css={
                    'color: #0085BF;min-width: 100px;border: 1px solid #D6D6D6;font-size: 14px;font-weight: 500; padding: 5px 10px;margin-right:5px'
                  }
                >
                  {' '}
                  Click here
                </Box>
                {'  '}
                to check the log file of your contacts
              </Box>
            </Box>
          </Box>
        </Box>
      </ModalBody>
      <ModalFooter>
        <Box right mt="15px" pb="15px" w="90%" m="0 auto">
          <Button onClick={() => closeModal()}>Cancel</Button>
          <Button primary>ADD MORE CONTACTS</Button>
        </Box>
      </ModalFooter>
    </Modal>
  );
};

export const CsvProgress = ({ closeModal }) => {
  return (
    <Modal height="342px" width="490px">
      <ModalBody>
        <Box is={Row}>
          <Box is={Col} xs={12} sm={12} md={12} lg={12}>
            <Box
              is={Title}
              align="center"
              fz="20px"
              thin="700"
              pt="20"
              my="0"
              w={'100%'}
              c={'#6D6D6D'}
            >
              Filename.csv -{' '}
              <Box is={'span'} css={'font-weight: 500;'}>
                &nbsp; importing
              </Box>
            </Box>
          </Box>
        </Box>
        <Box is={Row}>
          <Box is={Col} xs={12} sm={12} md={12} lg={12} py="0">
            <Box css={'text-align: center;width:90%;margin: 0 auto;'}>
              <Box
                is={Svg}
                icon="checked"
                color="#00B44F"
                size="22px"
                css={'margin-top:10px;'}
              />
              <Box
                css={
                  'margin: 25px auto;display: flex;justify-content: center;align-items: center;'
                }
              >
                <Box
                  css={
                    'height:4px;width: 310px; margin-right:10px;background-color: #F2F2F2;border-radius: 5px;overflow: hidden;'
                  }
                >
                  <Box
                    css={'height:100%;width:70%;background-color: #0085BF;'}
                  />
                </Box>
                <Box is={'span'} c="#0085BF">
                  70%
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ModalBody>
      <ModalFooter>
        <Box center mt="15px" pb="15px" w="90%" m="0 auto">
          <Button onClick={() => closeModal()}>Cancel</Button>
        </Box>
      </ModalFooter>
    </Modal>
  );
};
