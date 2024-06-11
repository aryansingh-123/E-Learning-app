import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../Enroll/EnrollmentModal.css'; 

const EnrollmentModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Enroll
      </Button>

      <Modal show={show} onHide={handleClose} className="enrollment-modal">
        <Modal.Header closeButton>
          <Modal.Title>Enrollment Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Click on Enroll Button to get your course.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EnrollmentModal;
