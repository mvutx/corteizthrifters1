import React from "react";
import Footer from "./Footer";

const Aboutus = () => {
  return (
    <div style={{ backgroundColor: "beige" }} className="container-fluid px-2 py-4">

      {/* Heading */}
      <h1 className="bg-dark text-warning p-3">
        The Rise of Corteiz Fashion in the UK Fashion Scene
      </h1>

      <h3 className="text-decoration-underline mt-4">Introduction to Corteiz</h3>
      <p className="bg-light text-muted p-3">
        In the ever-changing fashion industry, fresh companies often emerge and disappear.
        However, some establish a niche that attracts consumers. Corteiz is a popular brand
        that has become a major player in the UK fashion world through distinctive offerings.
      </p>

      <h3 className="text-decoration-underline mt-4">What is the Origin of Corteiz</h3>
      <p className="bg-light text-muted p-3">
        Corteiz was born as a creative fashion brand in the bustling street life of the UK.
        It quickly gained recognition among fashion-conscious youth who wanted unique clothing.
      </p>

      {/* Section One */}
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
            alt="fashion"
            className="img-fluid"
          />
        </div>

        <div className="col-md-6">
          <h3 className="text-decoration-underline">Where to Buy Corteiz Clothes</h3>
          <p className="bg-light text-muted p-3">
            Locating Corteiz clothes is simple because the brand is present online
            and in physical stores.
          </p>

          <h3 className="text-decoration-underline">Online Stores</h3>
          <p className="bg-light text-muted p-3">
            Official stores provide collections, size guides and exclusive offers.
          </p>
        </div>
      </div>

      {/* Section Two */}
      <div className="row mt-4">
        <div className="col-md-6">
          <h3 className="text-decoration-underline">Conclusion</h3>
          <p className="bg-light text-muted p-3">
            Corteiz has rapidly become iconic in UK fashion because of bold design,
            premium materials and strong streetwear identity.
          </p>

          <ol>
            <li>
              <strong>What is Corteiz?</strong>
              <p className="bg-light text-muted p-2">
                A UK streetwear brand known for bold modern fashion.
              </p>
            </li>

            <li>
              <strong>What types of clothing do you offer?</strong>
              <p className="bg-light text-muted p-2">
                Hoodies, cargos, jackets, shorts, tracksuits and more.
              </p>
            </li>

            <li>
              <strong>Exclusive collections?</strong>
              <p className="bg-light text-muted p-2">
                Yes, limited drops and special offers.
              </p>
            </li>

            <li>
              <strong>Where can I buy products?</strong>
              <p className="bg-light text-muted p-2">
                Online and selected stores.
              </p>
            </li>
          </ol>
        </div>

        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
            alt="clothing"
            className="img-fluid"
          />
        </div>
      </div>

      {/* Bottom moving text */}
      
    <Footer/>
    </div>
  );
  
};

export default Aboutus;