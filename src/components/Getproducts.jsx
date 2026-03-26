import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Carousel from './Carousel';
import Prompt from './Prompt';
import { useCart } from '../Addcart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const img_url = "https://kivuti.alwaysdata.net/static/images/";

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://kivuti.alwaysdata.net/api/get_products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.product_name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="container-fluid py-3">
      <Prompt />

      <h3 className="text-primary mt-3 text-center">Available Clothes</h3>

      {loading && <Loader />}
      {error && <h4 className="text-danger text-center">{error}</h4>}

      <Carousel />

      <div className="row mt-3">
        {products.map((product) => (
          <div
            className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3"
            key={product.id}
          >
            <div className="card shadow h-100 border-0">

              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="card-img-top"
                style={{
                  height: "160px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body d-flex flex-column p-2">
                <h6 className="text-primary small fw-bold">
                  {product.product_name}
                </h6>

                <p className="text-muted small mb-1">
                  {product.product_description?.slice(0, 35)}...
                </p>

                <h6 className="text-warning fw-bold">
                  Kes {product.product_cost}
                </h6>

                <div className="mt-auto">
                  <button
                    className="btn btn-outline-info btn-sm w-100 mb-2"
                    onClick={() => navigate("/makepayment", { state: { product } })}
                  >
                    Purchase
                  </button>

                  <button
                    className="btn btn-success btn-sm w-100"
                    onClick={() => handleAddToCart(product)}
                  >
                    Cart 🛒
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Getproducts;