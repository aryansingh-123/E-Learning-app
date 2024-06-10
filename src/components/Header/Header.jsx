import React, { useRef, useState } from "react";
import { Container, Button } from "reactstrap";
import "./header.css";
import Login from "../Login/Login";
import Signup from "../Signup/SignUp";
import Blog from "../Blog/Blog"; // Import the Blog component

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "Pages",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
    isBlog: true //blog link indicate
  },
];

const Header = () => {
  const menuRef = useRef();
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showBlog, setShowBlog] = useState(false); // State for blog modal

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const toggleSignup = () => setShowSignUp(!showSignUp);
  const toggleLogin = () => setShowLogin(!showLogin);
  const toggleBlog = () => setShowBlog(!showBlog); // Toggle blog modal

  const handleDropdownChange = (e) => {
    const selectedCourse = e.target.value;
    console.log("Selected course:", selectedCourse);
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> Learners.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    {/*  render onClick event for Blog link */}
                    {item.isBlog ? (
                      <a href={item.url} onClick={toggleBlog}>{item.display}</a>
                    ) : (
                      <a href={item.url}>{item.display}</a>
                    )}
                  </li>
                ))}
                <li className="nav__item">
                  <select className="nav__dropdown-select" onChange={handleDropdownChange}>
                    <option value="">Courses</option>
                    <option value="web-dev">Web Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="angular">Angular</option>
                    <option value="reactjs">ReactJS</option>
                    <option value="javascript">JavaScript</option>
                    <option value="java">Java</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="nav__right">
              <Button color="primary" onClick={toggleLogin}>
                Login
              </Button>{" "}
              <Button color="success" onClick={toggleSignup}>
                Sign Up
              </Button>
            </div>
          </div>

          <div className="nav__right">
            <p className="mb-0 d-flex align-items-center gap-2">
              <i className="ri-phone-line"></i> +91 6283725542
            </p>
          </div>
        </div>
      </Container>
      {/* Conditional rendering of login/signup and blog modals */}
      {showLogin && <Login isOpen={showLogin} toggle={toggleLogin} />}
      {showSignUp && <Signup isOpen={showSignUp} toggle={toggleSignup} />}
      {showBlog && <Blog isOpen={showBlog} toggle={toggleBlog} />}
    </header>
  );
};

export default Header;
