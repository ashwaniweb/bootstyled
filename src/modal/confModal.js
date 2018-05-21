import React from 'react';
import { Button } from '../button';
import Modal, { ModalBody } from './index';
import Svg from '../icons';
import Box from '../box';

const ConfModal = ({ icon, title, text, cancelClick, btnText, bdr }) => {
  return (
    <Modal width="500px" bdr={bdr}>
      <ModalBody>
        <Box center c="#737373">
          <Box is={Svg} icon={icon} c="#f25961" fz="200" py={20} />
          <Box fz="30">{title}</Box>
          <Box fz="16" bold pt={6} pb={20}>
            {text}
          </Box>
          <Box pb={15}>
            <Button gray onClick={cancelClick}>
              Cancel
            </Button>
            <Button danger>{btnText}</Button>
          </Box>
        </Box>
      </ModalBody>
    </Modal>
  );
};

export default ConfModal;
