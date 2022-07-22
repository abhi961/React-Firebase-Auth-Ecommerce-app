import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { image } from "./data";

const Carousels = () => {
  return <Carousel autoPlay infiniteLoop>
     {image.map((val)=> 
     <div className="image-conatiner">
      <img src={val.img} alt="img" />
     </div>
     )}
  </Carousel>;
};

export default Carousels;
