import React, { useState } from 'react';
import {
  Modal, ModalBody,
} from 'reactstrap';

const ModalOptions = (props) => {
  const {
    className,
    status,
  } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      <button className="btn btn-danger" onClick={toggle}>X</button>
        <ModalBody>
        <img className="img-modal" src="https://i.imgur.com/R8GINvY.jpg" alt=""/>
        <h2 className="my-1">{status}</h2>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalOptions;
