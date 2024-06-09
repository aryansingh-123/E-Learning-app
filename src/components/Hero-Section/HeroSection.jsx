import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion, useMotionValue, useTransform } from "framer-motion"; // Import motion and hooks from framer-motion
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  const [scrollDir, setScrollDir] = useState(""); // State to track scroll direction
  const x = useMotionValue(0); // init   motion value for X-axis
  const y = useMotionValue(0); // init motion value for Y-axis

  useEffect(() => {
    const updateMousePosition = (e) => {
      x.set(e.clientX - window.innerWidth / 2); // Updated X-axis motion value based on mouse position
      y.set(e.clientY - window.innerHeight / 2); // Updated Y-axis motion value based on mouse position
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [x, y]);

  const imgX = useTransform(x, [-100, 100], [-20, 20]); // Transform X-axis motion value for image animation
  const imgY = useTransform(y, [-100, 100], [-20, 20]); // Transform Y-axis motion value for image animation

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const replayAnimation = () => {
    if (scrollDir === "down") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); // Scroll to bottom
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero__content"
            >
              <h2 className="mb-4 hero__title">
                Welcome to Learners: <br /> Your Gateway to Unlimited Learning!
              </h2>
              <p className="mb-5">
                Discover a world of knowledge at your fingertips with Udemy, the leading online learning platform trusted by millions worldwide. From mastering in-demand skills to exploring new passions, our diverse range of courses has something for everyone.
              </p>
            </motion.div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ x: imgX, y: imgY }} // Apply transformed motion values to image style
              src={heroImg}
              alt=""
              className="w-100 hero__img"
              onClick={replayAnimation} // Replay animation on image click
            />
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default HeroSection;
