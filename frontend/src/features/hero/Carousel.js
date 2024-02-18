import React from "react";
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Carousel() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="mx-10 mt-6 ">
      <MultiCarousel responsive={responsive}>
        <div className="w-{10px} h-80">
          <img className="w-full  h-80" src="https://as1.ftcdn.net/v2/jpg/02/66/40/40/1000_F_266404077_U620rNn9gWl7wZ6JT2QG0nSg6k8Xdwfy.jpg"></img>
        </div>
        <div>
          <img  className="w-full h-80"   src="https://as1.ftcdn.net/v2/jpg/02/66/40/40/1000_F_266404077_U620rNn9gWl7wZ6JT2QG0nSg6k8Xdwfy.jpg"></img>
        </div>
        <div>
          <img  className="w-full h-80"  src="https://as1.ftcdn.net/v2/jpg/02/66/40/40/1000_F_266404077_U620rNn9gWl7wZ6JT2QG0nSg6k8Xdwfy.jpg"></img>
        </div>
        <div>
          <img className="w-full h-80"    src="https://as1.ftcdn.net/v2/jpg/02/66/40/40/1000_F_266404077_U620rNn9gWl7wZ6JT2QG0nSg6k8Xdwfy.jpg"></img>
        </div>
      </MultiCarousel>;
    </div>
  )
}
