import React from "react";
import { Row, Col, Card } from "react-bootstrap";
const AyurvedicLegends = () => {
  return (
    <>
      {/* ayurvedic legends: */}
      <Row xs={1} md={2} className="g-6 w-[100%] m-auto">
        <Col className="p-5">
          <Card className="!flex items-center justify-center border !border-[#436850] p-1 pt-4 rounded-3xl">
            <Card.Img
              variant="top"
              src="images/ayurvedicLegends/charaka.png"
              className="lg:h-[23rem] lg:w-[23rem]"
            />
            <Card.Body>
              <Card.Title className="text-center">
                FATHER OF MEDICINE
              </Card.Title>
              <Card.Text className="text-center">
                Acharya Charak, who was born around 300 BC, was a vital
                contributor to Ayurveda's ancient art and science, medicine, and
                lifestyle system that originated in ancient India.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-5">
          <Card className="!flex items-center justify-center border !border-[#436850] p-1 pt-4 rounded-3xl">
            <Card.Img
              variant="top"
              src="images/ayurvedicLegends/surgery.png"
              className="lg:h-[23rem] lg:w-[23rem]"
            />
            <Card.Body>
              <Card.Title className="text-center">FATHER OF SURGERY</Card.Title>
              <Card.Text className="text-center">
                Sushruta is considered the "Father of Plastic Surgery." He lived
                in India sometime between 1000 and 800 BC, and is responsible
                for the advancement of medicine in ancient India.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AyurvedicLegends;
