import React, { useState, useEffect } from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  const [countingStarted, setCountingStarted] = useState(false);

  useEffect(() => {
    setCountingStarted(true);
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                Learners is a global online learning platform offering diverse
                courses across technology, business, personal development, and
                more. With flexible, self-paced learning, expert instructors,
                and a supportive community, we empower learners worldwide to
                achieve their goals and advance their careers. Join us to
                unlock your potential and thrive.
              </p>

              <div className="about__counter">
                <div className="d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <CountUp
                      start={0}
                      end={125}
                      duration={6}
                      suffix="K"
                      startOnMount={false}
                      redraw={true}
                      decimals={0}
                      onEnd={() => setCountingStarted(true)}
                      preserveValue={true}
                    >
                      {({ countUpRef }) => (
                        <strong>
                          <span ref={countUpRef} className="counter" />
                        </strong>
                      )}
                    </CountUp>
                    <p className="counter__title">
                      <strong>
                        Completed Projects
                        {countingStarted ? ": 125K" : ""}
                      </strong>
                    </p>
                  </div>
                  <div className="single__counter">
                    <CountUp
                      start={0}
                      end={12}
                      duration={6}
                      suffix="M"
                      startOnMount={false}
                      redraw={true}
                      decimals={0}
                      onEnd={() => setCountingStarted(true)}
                      preserveValue={true}
                    >
                      {({ countUpRef }) => (
                        <strong>
                          <span ref={countUpRef} className="counter" />
                        </strong>
                      )}
                    </CountUp>
                    <p className="counter__title">
                      <strong>
                        Patient Around World
                        {countingStarted ? ": 12M" : ""}
                      </strong>
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <CountUp
                      start={0}
                      end={95}
                      duration={6}
                      suffix="M"
                      startOnMount={false}
                      redraw={true}
                      decimals={0}
                      onEnd={() => setCountingStarted(true)}
                      preserveValue={true}
                    >
                      {({ countUpRef }) => (
                        <strong>
                          <span ref={countUpRef} className="counter" />
                        </strong>
                      )}
                    </CountUp>
                    <p className="counter__title">
                      <strong>
                        Ideas Raised Funds
                        {countingStarted ? ": 95M" : ""}
                      </strong>
                    </p>
                  </div>

                  <div className="single__counter">
                    <CountUp
                      start={0}
                      end={5}
                      duration={6}
                      suffix="K"
                      startOnMount={false}
                      redraw={true}
                      decimals={0}
                      onEnd={() => setCountingStarted(true)}
                      preserveValue={true}
                    >
                      {({ countUpRef }) => (
                        <strong>
                          <span ref={countUpRef} className="counter" />
                        </strong>
                      )}
                    </CountUp>
                    <p className="counter__title">
                      <strong>
                        Categories Served
                        {countingStarted ? ": 5K" : ""}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
