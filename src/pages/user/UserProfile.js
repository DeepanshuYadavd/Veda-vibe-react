import React from "react";
import UserDashboardLinks from "../../components/user/UserDashboardLinks";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  InputGroup,
  Alert,
} from "react-bootstrap";
import { useState } from "react";
const UserProfile = () => {
  const [validated, setValidated] = useState(false);

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
    <Container fluid>
      <Row>
        <Col md={2}>
          <UserDashboardLinks />
        </Col>
        {/* my profile form */}
        <Col md={9}>
          <Container
            fluid
            className="border-3 !border-[#436850] my-3 p-3 rounded-3xl"
          >
            <h1 className="text-3xl text-center">
              <b>My Profile</b>
            </h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="FormBasicFirstName">
                <Form.Label>
                  <b>First Name:</b>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue="Deepanshu"
                  name="firstName"
                  className="border !border-[#A8CD9F] font-medium"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your first name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormBasicLastName">
                <Form.Label>
                  {" "}
                  <b>Last Name:</b>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue="Yadav"
                  name="lastName"
                  className="border !border-[#A8CD9F] font-medium"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your last name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormBasicEmail">
                <Form.Label>
                  <b>Email:</b>
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    disabled
                    value="test@gmail.com (Want to change email ? Please recreate your account) "
                    className="border !border-[#A8CD9F] font-medium"
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="FormBasicPhone">
                <Form.Label>
                  <b>Phone Number</b>
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    defaultValue=""
                    minLength={10}
                    className="border !border-[#A8CD9F] font-medium"
                  />
                  <Form.Control.Feedback type="invalid">
                    please enter valid number
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormBasicAddress">
                <Form.Label>
                  <b>Address</b>
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Enter your street name and house number"
                    defaultValue=""
                    className="border !border-[#A8CD9F] font-medium"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormBasicCity">
                <Form.Label>
                  <b>City</b>
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Enter your city"
                    defaultValue=""
                    className="border !border-[#A8CD9F] font-medium"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormBasicState">
                <Form.Label>
                  <b>State</b>
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Enter your state"
                    defaultValue=""
                    className="border !border-[#A8CD9F] font-medium"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormBasicZip">
                <Form.Label>
                  <b>Zip code</b>
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Enter your zip code"
                    defaultValue=""
                    className="border !border-[#A8CD9F] font-medium"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormBasicCountry">
                <Form.Label>
                  <b>Country</b>
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Enter your country"
                    defaultValue=""
                    className="border !border-[#A8CD9F] font-medium"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormBasicPassword">
                <Form.Label>
                  <b>Password</b>
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    required
                    name="password"
                    type="password"
                    placeholder="Password"
                    minLength={6}
                    onChange={onChange}
                    className="border !border-[#A8CD9F] font-medium"
                  />
                  <Form.Control.Feedback type="invalid">
                    please enter valid password
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormBasicPasswordRepeat">
                <Form.Label>
                  <b>Confirm Password</b>
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    required
                    name="ConfirmPassword"
                    type="password"
                    placeholder="Password"
                    minLength={6}
                    onChange={onChange}
                    className="border !border-[#A8CD9F] font-medium"
                  />
                  <Form.Control.Feedback type="invalid">
                    Both password should be match
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="!bg-[#A8CD9F] border !border-[#436850] text-black font-medium w-[50%] ml-[25%] mb-3"
              >
                Submit
              </Button>
              <Alert show={true} variant="danger" className="mb-2">
                user with that email is alreadfy exist
              </Alert>
              <Alert show={true} variant="info">
                File updated successfully
              </Alert>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
