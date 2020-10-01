import React, { FunctionComponent } from 'react';

import Modal from '../../components/Modal/Modal';
import Details from './Details';

const DetailsModal:FunctionComponent = () => (
  <Modal>
    <Details />
  </Modal>
);

export default DetailsModal;
