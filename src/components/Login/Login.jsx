import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = ({ isOpen, toggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission
    console.log("Login submitted with email:", email, "and password:", password);
    // Clear form fields
    setEmail("");
    setPassword("");
    // Close modal
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Login</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaUser />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaLock />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button color="primary" className="w-100" type="submit">
            Login
          </Button>
        </form>
      </ModalBody>
      <ModalFooter>
        <p className="mb-0">Don't have an account? <a href="#">Sign Up</a></p>
      </ModalFooter>
    </Modal>
  );
};

export default Login;
