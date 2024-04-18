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
import CartItems from "../../components/CartItems";

const AdminOrderDetails = () => {
  return (
    <Container fluid>
      <h1 className="font-semibold text-2xl text-center my-2">
        Order details of particular user
      </h1>
      <Row className="my-4 mx-1 border-1 !border-[#436850] rounded-2xl p-2">
        <Col md={4}>
          <h1 className="font-semibold text-3xl mb-2">Shipping:</h1>
          <b>Name:</b>Deepanshu
          <br />
          <b>Address:</b>302 ram nagar jrc punjab
          <br />
          <b>phone no.:</b>9501620228
          <br />
          <Alert className="mt-4" variant="danger">
            Not delivered yet.
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
            paid on 16.04.2024
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
                  Mark as Delivered
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      {/* going to buy productd.... note: it should be fixed not dynamic */}
      <Row className="my-4 mx-1 border-1 !border-[#436850] rounded-2xl p-2">
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

export default AdminOrderDetails;
