import React from "react";
import { Row } from "react-bootstrap";
import OurProducts from "../components/OurProducts";
const Shopp = () => {
  // we send this category to OurProduct.js for displaying product name:
  const productCategory = [
    "BREAK STRESS",
    "CYST-GO PRODUCT",
    "LIV KID DETOX",
    "ROMONIL",
    "DIGEST AMA",
    "WHITE DISCHARGE",
  ];
  return (
    <>
      <Row xs={1} md={2} className="g-4 m-2 flex  justify-center gap-5 md:p-5">
        {productCategory.map((item, idx) => (
          <OurProducts key={idx} category={item} idx={idx} />
        ))}
      </Row>
    </>
  );
};

export default Shopp;
