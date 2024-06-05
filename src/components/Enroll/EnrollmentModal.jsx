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
          {/* Add enrollment information here */}
          <p>This is the enrollment information.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* Add additional buttons if needed */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EnrollmentModal;
