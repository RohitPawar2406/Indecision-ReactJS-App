import React from 'react';
import Modal from 'react-modal';

const OptionModal=(props)=>(
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleDeleteSelectedOptions}
    closeTimeoutMS={200}
    className="modal"
    >
    <h3>
      selected Option
    </h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button onClick={props.handleDeleteSelectedOptions}>EXIT</button>
  </Modal>
)

export default OptionModal;