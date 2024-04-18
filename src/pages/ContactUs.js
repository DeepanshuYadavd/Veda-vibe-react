import React from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
const ContactUs = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container fluid>
      <Row className=" p-4 justify-content-md-center">
        <h1 className="text-2xl font-semibold text-center mb-3">
          Book Your Appointment
        </h1>
        <Col md={7} className="border-3 !border-[#436850] p-3 rounded-3xl">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="BasicFormYourName" className="mb-3">
              <Form.Label>Your Name:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Your Name"
                defaultValue="Deepanshu yadav"
                className="border !border-[#90c0a0]"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="BasicFormNumber" className="mb-3">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Your Phone Number"
                defaultValue=""
                minLength={10}
                className="border !border-[#90c0a0]"
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid phone number
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="border !border-[#90c0a0]"
              />
            </Form.Group>
            <Button
              type="submit"
              className="mb-2 border !border-[#436850] !bg-[#a1c6ae] text-dark font-medium w-[50%] ml-[25%]"
            >
              Book Appointment
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
