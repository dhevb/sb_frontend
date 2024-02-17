import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CategoriesSlides() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 21,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 18,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 9,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };

  return (
    <div>
      <div className="categorie px-10">
        <div>
          <Carousel responsive={responsive}>
            {/* first card */}
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="rounded-box"
              />
            </div>
            {/* second card */}
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                className="rounded-box"
              />
            </div>

            {/* third card */}
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="rounded-box"
              />
            </div>

            {/* fourth card */}
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                className="rounded-box"
              />
            </div>

            {/* fifth card */}
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="rounded-box"
              />
            </div>

            {/* sixth card */}
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                className="rounded-box"
              />
            </div>

            {/* seventh card */}
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item w-20 h-20">
              <img
                src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                className="rounded-box"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
