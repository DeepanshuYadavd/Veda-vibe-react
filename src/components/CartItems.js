import React from "react";
import { ListGroup, Row, Col, Image, Form, Button } from "react-bootstrap";

const CartItems = () => {
  return (
    <ListGroup.Item>
      <Row className="m-1">
        <Col md={2}>
          <Image src="images/products/Digest AMA.png" />
        </Col>
        <Col md={2} className="mt-1 mb-1">
          <b>DIGEST AMA</b>
        </Col>
        <Col md={2}  className="mt-1 mb-1">
          <b>₹999</b>
        </Col>
        <Col md={3}  className="mt-1 mb-1">
          {" "}
          <Form.Select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Form.Select>
        </Col>
        <Col md={3}  className="mt-1 mb-1">
          {" "}
          <Button
            className="!bg-[#474847] border !border-[#72886c] text-white"
            type="button"
            variant="secondary"
            onClick={() => window.confirm("Are you Sure")}
          >
            <i className="bi bi-trash"></i>
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default CartItems;
