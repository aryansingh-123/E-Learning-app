import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const SignUp = ({ isOpen, toggle }) => {
  const [email, setEmail] = useState("");
  const [mobile, setmobile] = useState("")
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup submission
    console.log("Signup submitted with email:", email, "and password:", password);
    // Clear form fields
    setEmail("");
    setPassword("");
    // Close modal
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Mobile No</label>
            <input type="mobile no" className="form-control" id="mobile" value={mobile} onChange={(e) => setmobile(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button color="primary" type="submit">Sign Up</Button>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default SignUp;
