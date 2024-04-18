import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
const OurProducts = (category) => {
  const images = [
    "images/products/Break Stress.png",
    "images/products/Cyst-go.png",
    "images/products/Liv Kid Detox.png",
    "images/products/Romonil.png",
    "images/products/Digest AMA.png",
    "images/products/White Discharge.png",
  ];

  return (
    <>
      <Card style={{ width: "21rem", border: "1px solid #A8CD9F" }}>
        <Card.Img variant="top" src={images[category.idx]} />
        <Card.Body>
          <Card.Title>{category.category}</Card.Title>
          <Card.Text>
            {" "}
            <Rating
              readonly
              size={20}
              initialValue={4}
              SVGstyle={{ display: "inline" }}
            />
          </Card.Text>
          <Card.Text className="mt-2 mb-2">
            <b>₹999</b>
            <span className="ml-2 line-through">₹1599</span>
          </Card.Text>
          <Link to="/product-details">
            <Button
              className="w-full !bg-[#A8CD9F] border !border-[#72886c] text-black"
              variant="primary"
            >
              Product Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default OurProducts;
