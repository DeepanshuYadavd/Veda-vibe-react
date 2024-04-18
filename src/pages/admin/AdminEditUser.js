import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
const AdminEditUser = () => {
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
    <Container fluid className="border p-4">
      <Row className=" justify-content-md-center ">
        <h1 className="text-2xl font-medium text-center">Edit user</h1>
        <Col md={1}>
          <Link
            to="/admin/user-details"
            className="btn btn-info my-1 bg-white text-dark border !border-[#436850]"
          >
            Go back
          </Link>
        </Col>
        <Col md={7}>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="border-3 !border-[#436850] rounded-xl p-3 "
          >
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                name="firstName"
                type="text"
                defaultValue="deepanshu"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                name="lastName"
                type="text"
                defaultValue="yadav"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                name="email"
                type="email"
                defaultValue="test@gmail.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicIsAdmin">
              <Form.Check
                required
                name="isadmin"
                type="checkbox"
                label="IsAdmin"
              />
            </Form.Group>
            <Button  type="submit" className="border !border-[#436850] bg-[#bbd9bb] text-dark font-medium hover:bg-white w-[50%] ml-[25%]">
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditUser;
