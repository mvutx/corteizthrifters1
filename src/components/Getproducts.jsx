import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Carousel from './Carousel';
import logo from "../assets/logo.png.jpg"; // ✅ your logo file
import Prompt from './Prompt';

const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  
  return (
    <div className="container-fluid py-4">
      <Prompt/>
      <h3 className="text-primary mt-4">Available Clothes</h3>
      {loading && <Loader />}
      {error && <h4 className="text-danger">{error}</h4>}

      {/* Carousel */}
      <Carousel />

      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-3" key={product.id}>
            <div className="card shadow h-100">
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="text-primary">{product.product_name}</h5>
                <p className="text-muted">
                  {product.product_description.slice(0, 70)}...
                </p>
                <h4 className="text-warning mb-3">Kes {product.product_cost}</h4>
                <button
                  className="btn btn-outline-info mt-auto"
                  onClick={() => navigate("/makepayment", { state: { product } })}
                >
                  Purchase Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Getproducts;
