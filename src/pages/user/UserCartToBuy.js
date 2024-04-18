import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  ListGroup,
  Button,
} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import CartItems from "../../components/CartItems";
const UserCartToBuy = () => {
  return (
    <Container fluid>
      <Row className="my-4 mx-1 border-2 !border-[#436850] rounded-2xl p-2">
        <Col md={4}>
          <h1 className="font-semibold text-3xl mb-2">Shipping:</h1>
          <b>Name:</b>Deepanshu
          <br />
          <b>Address:</b>302 ram nagar jrc punjab
          <br />
          <b>phone no.:</b>9501620228
          <br />
          <LinkContainer to="/user/my-profile" className="my-4">
                <Button
                  type="button"
                  className="w-full !bg-[#A8CD9F] border !border-[#72886c] text-black"
                >
                Go to Profile
                </Button>
              </LinkContainer>
          <Alert variant="danger">
            To make your order, please fill out your profile with correct
            address, city etc.
          </Alert>
        </Col>
        <Col md={4}>
          <h1 className="font-semibold text-3xl mb-2">Payment:</h1>
          <Form.Select>
            <option value="pp">paypal</option>
            <option value="cod">
              cash on delivery(delivery may be delayed)
            </option>
          </Form.Select>
          <Alert className="mt-[3.8rem]" variant="success">
            not paid yet
          </Alert>
        </Col>
        <Col md={4}>
          <h1 className="font-semibold text-3xl mb-2">Order Summery:</h1>
          <ListGroup>
            <ListGroup.Item>
              Items price (after tax):<span className="fw-bold">$892</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping:<span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax:<span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Total Price:<span className="fw-bold">$999</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button
                  size="lg"
                  variant="danger"
                  type="button"
                  className="border !border-[#436850] !bg-[#A8CD9F] text-dark font-normal"
                >
                  ORDER NOW
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      {/* going to buy productd.... note: it should be fixed not dynamic */}
      <Row className="my-4 mx-1 border-2 !border-[#436850] rounded-2xl p-2">
        <h1 className="font-semibold text-3xl mb-2">Going to Buy:</h1>
        <ListGroup variant="flush">
          {Array.from({ length: 3 }).map((item, idx) => (
            <>
              <CartItems key={idx} />
            </>
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
};

export default UserCartToBuy;
