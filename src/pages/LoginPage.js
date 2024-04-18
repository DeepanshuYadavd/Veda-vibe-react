import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [validated, setValidated] = useState(false);
  // password visibility
  const [show, setShow] = useState(false);
  const ShowPasswordHandler = () => {
    setShow(!show);
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container>
      <Row className="justify-content-md-center p-4">
        <Col
          md={7}
          className="border-3 !border-[#436850] rounded-3xl px-5 py-3 "
        >
          <h1 className="text-2xl font-semibold text-center mb-3">
            Unlock the Path to a Healthier Life:LOG IN
          </h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="FormBasicEmail">
              <Form.Label>Email:</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  class="email"
                  className="border !border-[#90c0a0]"
                />
                <Form.Control.Feedback type="invalid">
                  enter valid email address
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicPassword">
              <Form.Label>Password:</Form.Label>
              <InputGroup hasValidation className="relative">
                <Form.Control
                  required
                  name="password"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  minLength={6}
                  className="border !border-[#90c0a0]"
                />
                <div
                  onClick={ShowPasswordHandler}
                  className="absolute right-4 top-1 text-xl cursor-pointer"
                >
                  {show ? (
                    <i class="bi bi-eye-slash-fill"></i>
                  ) : (
                    <i class="bi bi-eye-fill"></i>
                  )}
                </div>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicCheckbox">
              <InputGroup hasValidation>
                <Form.Check
                  name="doNotLogout"
                  type="checkbox"
                  label="Do not logout"
                />
              </InputGroup>
            </Form.Group>

            <Button
              type="submit"
              className="mb-2 border !border-[#436850] !bg-[#a1c6ae] text-dark font-medium w-[60%] ml-[20%]"
            >
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />{" "}
              Submit
            </Button>
            <Row className="pb-2">
              <Col>
                don't have an account?
                <Link to="/register" className="underline">
                  register now
                </Link>
              </Col>
            </Row>
            <Alert show={true} variant="danger" className="mb-2">
              wrong credential
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
