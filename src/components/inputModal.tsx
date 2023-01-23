import { Modal, Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";

interface ModalProps {
  visible: boolean;
  setVisible: Function;
}

// function InputModal() {
const InputModal: React.FC<ModalProps> = (props) => {
  return (
    <>
      <Modal show={props.visible} onHide={() => props.setVisible(false)} keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hello World</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.setVisible(false)}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InputModal;
