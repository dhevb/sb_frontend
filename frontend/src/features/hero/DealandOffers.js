import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import book1 from "../../assets/book1.jpg"
import book2 from "../../assets/book2.jpg"
import book3 from "../../assets/book3.jpg"
import cycle1 from "../../assets/cycle1.jpg"
import cycle2 from "../../assets/cycle2.jpg"
import diye1 from "../../assets/diya1.jpg"
import diye2 from "../../assets/diya2.jpg"

import React from "react";

export default function DealandOffers() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>


    {/* Deals and offers carousel */}
    <div className="DealandOffers">
      <div>
        <h1 className="text-xl font-bold py-4">DEALS & OFFERS</h1>
        <Carousel responsive={responsive}>
            {/* first card */}
          <div className="mb-4">
            <div className="card w-64 bg-base-200  rounded shadow-xl">
              <figure>
                <img
                  src={book1}
                  alt="book"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">
                  UP TO 10% OFF
                </h2>
                <p className="text-sm text-center">Save extra on Books.</p>
                <div className="card-actions justify-center">
                  <div className="badge badge-outline p-4">Products</div>
                </div>
              </div>
            </div>
          </div>
          {/* second card */}
          <div>
            <div className="card w-64 bg-base-200  rounded shadow-xl">
              <figure>
                <img
                  src= {cycle2}
                  alt="cycle"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">
                  UP TO 20% OFF
                </h2>
                <p className="text-sm text-center">Save extra on E-Cycle.</p>
                <div className="card-actions justify-center">
                  <div className="badge badge-outline p-4">Products</div>
                </div>
              </div>
            </div>
          </div>
          
         {/* third card */}
         <div>
            <div className="card w-64 bg-base-200 rounded shadow-xl">
              <figure>
                <img
                  src={cycle1}
                  alt="cycle"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">
                  UP TO 30% OFF
                </h2>
                <p className="text-sm text-center">Save extra on E-Cycle.</p>
                <div className="card-actions justify-center">
                  <div className="badge badge-outline p-4">Products</div>
                </div>
              </div>
            </div>
          </div>

          {/* fourth card */}
          <div>
            <div className="card w-64 bg-base-200 rounded shadow-xl">
              <figure>
                <img
                  src={book3}
                  alt="book"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">
                  UP TO 30% OFF
                </h2>
                <p className="text-sm text-center">Save extra on Books</p>
                <div className="card-actions justify-center">
                  <div className="badge badge-outline p-4">Products</div>
                </div>
              </div>
            </div>
          </div>

          {/* fifth card */}
          <div>
            <div className="card w-64 bg-base-200 rounded shadow-xl">
              <figure>
                <img
                  src={book2}
                  alt="book"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">
                  UP TO 35% OFF
                </h2>
                <p className="text-sm text-center">Save extra on Books</p>
                <div className="card-actions justify-center">
                  <div className="badge badge-outline p-4">Products</div>
                </div>
              </div>
            </div>
          </div>

          {/* sixth card */}
          <div>
            <div className="card w-64 bg-base-200 rounded shadow-xl">
              <figure>
                <img
                  src={book3}
                  alt="book"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">
                  UP TO 25% OFF
                </h2>
                <p className="text-sm text-center">Save extra on Books.</p>
                <div className="card-actions justify-center">
                  <div className="badge badge-outline p-4">Products</div>
                </div>
              </div>
            </div>
          </div>      
        </Carousel>
      </div>
    </div>

    </div>
  );
}
