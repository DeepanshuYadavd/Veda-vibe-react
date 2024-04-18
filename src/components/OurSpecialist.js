import React from "react";
import { ReactTyped } from "react-typed";
import { Row, Col, Container } from "react-bootstrap";
const OurSpecialist = () => {
  return (
    <>
      {/* dr. arun details */}
      <Container className="border-l-4 border-r-4 !border-[#436850] p-8 mb-8 rounded-xl">
        <div className="text-[1.3rem] mb-2">Our Specialist :</div>
        <Row>
          <Col sm={3} className="">
            <Row className="rounded-3xl">
              <img
                className="bg-[#944E63] rounded-3xl"
                src="images/certificate/arunsir.png"
                alt="dr.arun pic"
              />
            </Row>
            <div className="font-semibold  text-center  p-2 text-[1.5rem]">
              Dr. ARUN KUMAR
            </div>
          </Col>
          <Col sm={9} className=" p-3">
            {/* automatic typing: */}
            <div className="text-[#481E14] text-[1.4rem]">
              <ReactTyped
                strings={[
                  "I am Dr. Arun kumar",
                  "Senior Ayurvedic consultant",
                  "Panchakarma Specialist",
                  "Punjab Icon Award Winner"
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop
              />
            </div>
            <div className="md:text-[1.4rem]">
              <li>Senior Ayurvedic consultant</li>
              <li>Panchakarma Specialist (Kerala) 7 year Experience</li>
              <li>Punjab Icon Award Winner 2022-2023</li>
            </div>

            <div className="text-[1.2rem] mt-2">
              Ayurvedacharya (B.A.M.S)-2016-Guru Ravidas Ayurved
              University,Hoshiarpur(Smt Urmila Devi Ayurvedic
              College,Hoshiarpur)
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OurSpecialist;
