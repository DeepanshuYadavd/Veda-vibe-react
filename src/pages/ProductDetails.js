import React from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddedToCartMessage from "../components/AddedToCartMessage";
const ProductDetails = () => {
  return (
    <>
      <Container>
        {" "}
        <AddedToCartMessage />
      </Container>

      <Row className="m-5">
        <Col md={4}>
          <Image className="" src="/images/products/Romonil.png" />
        </Col>
        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroup.Item className="border-b !border-[#A8CD9F]">
              <b>PRODUCT TITLE</b>
            </ListGroup.Item>
            <ListGroup.Item className="border-b !border-[#A8CD9F]">
              <Rating
                readonly
                size={20}
                initialValue={4}
                SVGstyle={{ display: "inline" }}
              />{" "}
              (1)
            </ListGroup.Item>
            <ListGroup.Item className="border-b !border-[#A8CD9F]">
              Price : <span className="fw-bold">₹999</span>
            </ListGroup.Item>
            <ListGroup.Item className="border-b !border-[#A8CD9F] text-[1.3rem]">
              Description: "Romonil:Rekindling Passion,Restoring Intimacy...."
            </ListGroup.Item>
            <ListGroup.Item className="!border-b !border-[#A8CD9F] text-[1.2rem]">
              <b className="text-[1.2rem]">Benefits :</b>
              <br />
              <p>1.Provides effective pain relief</p>
              <p>2.Alleviates discomfort and soreness</p>
              <p>3.Soothes aches and pains</p>
              <p>4.Helps manage pain naturally without harsh chemicals</p>
              <p>5.Promotes overall comfort and well-being</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className="!border-b !border-[#A8CD9F]">
              Status : In stock
            </ListGroup.Item>
            <ListGroup.Item className="!border-b !border-[#A8CD9F]">
              Price : <span className="fw-bold">₹999</span>
            </ListGroup.Item>
            <ListGroup.Item className="!border-b !border-[#A8CD9F]">
              <Form.Select>
                Quantity:
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
            </ListGroup.Item>
            <Button className="!bg-[#436850] border-2 !border-[#A8CD9F] mt-4 text-white">
              Add To Cart
            </Button>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
