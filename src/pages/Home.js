import React from "react";
import { Row } from "react-bootstrap";
import HomeCrousel from "../components/HomeCrousel";
import AyurvedicLegends from "../components/AyurvedicLegends";
import OurProducts from "../components/OurProducts";
import OurSpecialist from "../components/OurSpecialist";
import OurYouTubeVideos from "../components/OurYouTubeVideos";
const Home = () => {
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
      <HomeCrousel />
      <AyurvedicLegends />
    

      <h1 className="text-3xl font-medium text-center">Our Products:</h1>
      <Row
        xs={1}
        md={2}
        className="g-4 m-2  flex  justify-center gap-5 md:p-5 mb-5 border"
      >
        {productCategory.map((item, idx) => (
          <OurProducts key={idx} category={item} idx={idx} />
        ))}
      </Row>

      <OurSpecialist />
      <br />
      <OurYouTubeVideos />
      <br />
    </>
  );
};

export default Home;
