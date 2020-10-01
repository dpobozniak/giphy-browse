import React, { FunctionComponent, MouseEvent } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Button from '../UI/Button/Button';

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.55);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const ModalWrapper = styled.div`
  background: #fff;
  border: 1px solid #444;
  border-radius: 0.3em;
  left: 10%;
  padding: 1em;
  position: absolute;
  right: 10%;
  top: 5vmin;
`;

const CloseButton = styled(Button)`
  float: right;
`;

interface IModal {
  children: React.ReactNode;
}

const Modal: FunctionComponent<IModal> = ({ children }: IModal) => {
  const history = useHistory();

  const handleClose = (event: MouseEvent) => {
    event.stopPropagation();

    history.goBack();
  };

  return (
    <Overlay>
      <ModalWrapper>
        <CloseButton $kind="primary"  onClick={handleClose}>Close</CloseButton>
        {children}
      </ModalWrapper>
    </Overlay>
  );
};

export default Modal;
