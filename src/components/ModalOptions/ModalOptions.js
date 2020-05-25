import React, { useState } from 'react';
import {
  Modal, ModalBody,
} from 'reactstrap';

const ModalOptions = (props) => {
  const {
    className,
    status,
  } = props;

  const checkImage = (statusVar) => {
    if (status === 'poisonus') {
      return 'https://i.imgur.com/R8GINvY.jpg';
    } if (status === 'deadly') {
      return 'https://bestanimations.com/Military/Explosions/atomic-mushroom-cloud-nuclear-explosion-4-3.gif';
    } if (status === 'won') {
      return 'https://media2.giphy.com/media/9qU5yVktz0yqs/source.gif';
    }
    return '';
  };

  const checkPhrase = (statusVar) => {
    if (status === 'poisonus') {
      return 'You picked a poison shroom! Lose 2 shrooms!';
    } if (status === 'deadly') {
      return 'You picked the deadly shroom! Lose all Shrooms!';
    } if (status === 'won') {
      return 'You have collected all the Shroom! You Win!';
    }
    return '';
  };

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      <button className="btn btn-danger" onClick={toggle}>X</button>
        <ModalBody>
        <img className="img-modal" src={checkImage(status)} alt=""/>
        <h3 className="my-1">{checkPhrase(status)}</h3>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalOptions;
