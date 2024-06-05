import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      "Learners has been a game-changer for me! The variety of courses is amazing, and I love being able to learn at my own pace. 
                      The instructors are knowledgeable, and the community support is fantastic. 
                      I highly recommend Udemy to anyone looking to expand their skills or explore new interests."
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Sahil</h6>
                        <p>Mumbai, Maharastra</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      "I've taken several courses on Learners, and each one has exceeded my expectations. The instructors are engaging, the content is well-structured, and the affordability is unbeatable. Plus, the ability to earn certifications adds real value to my learning journey. 
                      I'm grateful for this platform and excited to continue my education here."
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Amit Rathoure</h6>
                        <p>Nawada , Delhi</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      flexibility of time
                      </h6>
                      <p>
                      As someone with a busy schedule, Learners has been a lifesaver. I appreciate the flexibility to learn on my own time, and the quality of instruction is top-notch. I've gained practical skills that I can immediately apply to my job, thanks to the real-world examples and hands-on projects included in the courses.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Raj Huda</h6>
                        <p>Noida, Uttar Pradesh</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
