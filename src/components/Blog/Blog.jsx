// Blog.js

import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Blog.css"; // Import custom CSS for styling

const Blog = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle} className="blog-header">Blog</ModalHeader>
      <ModalBody>
        <div className="blog-content">
          <h3>Welcome to Our Blog</h3>
          <p>
            Title: Discover the World of Learning with Learners
          </p>
          Introduction:
In today's fast-evolving world, learning is paramount. Learners is a platform empowering individuals to unlock their potential through diverse learning experiences.<br/>
<p>Exploring Learners:
More than just a platform, Learners is a vibrant community offering a wide range of expert-curated courses across various domains.
</p>

          {/* Your blog content */}
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-secondary" onClick={toggle}>Close</button>
      </ModalFooter>
    </Modal>
  );
};

export default Blog;
