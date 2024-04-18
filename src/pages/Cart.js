import React from "react";
import { Container, Row, Col, Alert, ListGroup, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartItems from "../components/CartItems";
const Cart = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <h1 className="text-[2rem]">Shopping Cart:</h1>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((item, idx) => (
              <>
                <CartItems key={idx} />
              </>
            ))}
          </ListGroup>
          <Alert variant="info">Your Cart is Empty</Alert>
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>Subtotal(2 items)</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Price : <span className="fw-bold">$399</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to="/user/cartToBuy">
                <Button
                  type="button"
                  className="w-full !bg-[#A8CD9F] border !border-[#72886c] text-black"
                >
                  Proceed to checkout
                </Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
