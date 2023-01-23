import { Modal, Button } from 'react-bootstrap'
// import React from 'react'
import { useState } from 'react'

function InputModal() {
  const [show, setShow] = useState(false)
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Student Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Hello World
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" 
          onClick={() => setShow(false)}
          >
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default InputModal
