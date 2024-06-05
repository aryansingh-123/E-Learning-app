import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "typically self-paced, allowing you to learn at your own speed and fit your studies around your existing commitments.    ",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Learners provides a platform for interaction with instructors and fellow students through discussion forums, Q&A sessions, and direct messaging, fostering a sense of community and support.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Learners also offers certification upon completion of many courses, providing learners with tangible proof of their newfound skills and knowledge. ",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
