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
const Register = () => {
  const [validated, setValidated] = useState(false);

  // ShowPasswordHandler
  const [show, setShow] = useState(false);
  const [ConfirmShow, ConfirmSetShow] = useState(false);

  const PasswordVisibilityHandler = () => {
    setShow(!show);
  };

  const ConfirmPasswordVisibilityHandler = () => {
    ConfirmSetShow(!ConfirmShow);
  };

  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const onChange = () => {
    const password = document.querySelector("input[name=password]");
    const ConfirmPassword = document.querySelector(
      "input[name=ConfirmPassword]"
    );
    if (password.value === ConfirmPassword.value) {
      ConfirmPassword.setCustomValidity("");
    } else {
      ConfirmPassword.setCustomValidity("both password should be same");
    }
  };
  return (
    <Container>
      <Row className=" justify-content-md-center p-4">
        <Col
          md={7}
          className="border-3 !border-[#436850] rounded-3xl px-5 py-3 "
        >
          <h1 className="text-2xl font-semibold text-center mb-3">
            Unlock the Path to a Healthier Life:JOIN US
          </h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="FormBasicFirstName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Your first Name"
                name="name"
                className="border !border-[#90c0a0]"
              />
              <Form.Control.Feedback type="invalid">
                please enter your first name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicSecondName">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                className="border !border-[#90c0a0]"
              />
              <Form.Control.Feedback type="invalid">
                please enter your last name
              </Form.Control.Feedback>
            </Form.Group>
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
                  onChange={onChange}
                  className="border !border-[#90c0a0]"
                />
                <div
                  onClick={PasswordVisibilityHandler}
                  className="absolute right-3 top-1 text-xl cursor-pointer"
                >
                  {show ? (
                    <i class="bi bi-eye-slash-fill"></i>
                  ) : (
                    <i class="bi bi-eye-fill"></i>
                  )}
                </div>
                <Form.Control.Feedback type="invalid">
                  please enter valid password
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicPasswordRepeat">
              <Form.Label>Confirm Password:</Form.Label>
              <InputGroup hasValidation className="relative">
                <Form.Control
                  required
                  name="ConfirmPassword"
                  type={ConfirmShow ? "text" : "password"}
                  placeholder="Password"
                  minLength={6}
                  onChange={onChange}
                  className="border !border-[#90c0a0]"
                />
                <div
                  onClick={ConfirmPasswordVisibilityHandler}
                  className="absolute right-3 top-1 text-xl cursor-pointer"
                >
                  {ConfirmShow ? (
                    <i class="bi bi-eye-slash-fill"></i>
                  ) : (
                    <i class="bi bi-eye-fill"></i>
                  )}
                </div>
                <Form.Control.Feedback type="invalid">
                  Both password should be match
                </Form.Control.Feedback>
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
                Already have an account?
                <Link to="/login" className="underline">
                  login
                </Link>
              </Col>
            </Row>
            <Alert show={true} variant="danger" className="mb-2">
              user with that email is alreadfy exist
            </Alert>
            <Alert show={true} variant="info">
              user created successfully!!
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
