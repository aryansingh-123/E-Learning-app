import React,  { useState } from "react";
import '../Enroll/EnrollmentModal.css'; 
import { Modal, Button } from 'react-bootstrap';


const CourseCard = (props) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  const { imgUrl, title, lesson, students, rating } = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {lesson} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {rating}K
          </p>

          <p className="enroll d-flex align-items-center gap-1">
          <Button variant="primary" onClick={handleShow}>
        Enroll
      </Button>

      <Modal show={show} onHide={handleClose} className="enrollment-modal">
        <Modal.Header closeButton>
          <Modal.Title>Enrollment Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Added enrollment information here */}
          <p>Click on Enroll Button to get your course.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* Added additional buttons for enrollment  */}
          <Button variant="secondary" onClick={handleShow}>
            Enroll
          </Button>
        </Modal.Footer>
      </Modal>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
