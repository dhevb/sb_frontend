import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
          <div>
            <div className="card w-64 bg-base-200  rounded shadow-xl">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">
                  UP TO 30% OFF
                </h2>
                <p className="text-sm text-center">Save extra on Herbal Products.</p>
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
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">
                  UP TO 30% OFF
                </h2>
                <p className="text-sm text-center">Save extra on Herbal Products.</p>
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
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">
                  UP TO 30% OFF
                </h2>
                <p className="text-sm text-center">Save extra on Herbal Products.</p>
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
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">
                  UP TO 30% OFF
                </h2>
                <p className="text-sm text-center">Save extra on Herbal Products.</p>
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
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">
                  UP TO 30% OFF
                </h2>
                <p className="text-sm text-center">Save extra on Herbal Products.</p>
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
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">
                  UP TO 30% OFF
                </h2>
                <p className="text-sm text-center">Save extra on Herbal Products.</p>
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
