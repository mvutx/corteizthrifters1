import React from "react";
import page1 from "../assets/page1.png";
import page2 from "../assets/page2.png";
import page3 from "../assets/page3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Carousel = () => {
  return (
    <section className="row mb-4">
      <div className="col-lg-12">
        {/* ✅ Bootstrap Carousel with auto-slide, loop, and indicators */}
        <div
          id="mycarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#mycarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#mycarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#mycarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* Carousel items */}
          <div className="carousel-inner">
            <div className="carousel-item ">
              <img
                src={page1}
                alt="slide1"
                className="d-block w-100"
                height="600"
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={page2}
                alt="slide2"
                className="d-block w-100"
                height="600"
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item active">
              <img
                src={page3}
                alt="slide3"
                className="d-block w-100"
                height="600"
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#mycarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "50%" }}
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#mycarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              style={{ backgroundColor: "rgba(255,193,7,0.8)", borderRadius: "50%" }}
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Optional Marquee Banner */}
        <marquee className="bg-info mt-3 py-2 text-dark fw-bold">
          ★ Limited Happy New Year 2026 Deal | Buy ksh 3,350 & Use Code YS.VUTI-75OFF for ksh 1,075 Discount
        </marquee>
      </div>
    </section>
  );
};

export default Carousel;