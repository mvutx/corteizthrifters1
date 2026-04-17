import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Footer from "./Footer";

const Makepayment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // GET PRODUCTS (single or cart)
  const initialProducts = location.state?.product
    ? [{ ...location.state.product, quantity: 1 }]
    : location.state?.cart?.map(item => ({
        ...item,
        quantity: item.quantity || 1
      })) || [];

  const [products, setProducts] = useState(initialProducts);
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");

  const img_url = "https://kivuti.alwaysdata.net/static/images/";

  // UPDATE QUANTITY
  const updateQuantity = (id, delta) => {
    setProducts(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, (item.quantity || 1) + delta)
            }
          : item
      )
    );
  };

  // TOTALS
  const totalCost = products.reduce(
    (acc, item) => acc + item.product_cost * (item.quantity || 1),
    0
  );

  const finalTotal = Math.max(0, totalCost - discount);

  // APPLY PROMO
  const applyPromo = async () => {
    try {
      setPromoMessage("Applying code...");

      const res = await axios.post(
        "http://localhost:5000/api/apply-code",
        {
          code: promoCode.trim().toUpperCase(),
          total: totalCost
        }
      );

      setDiscount(res.data.discount);
      setPromoMessage("✅ " + res.data.message);
    } catch (err) {
      setDiscount(0);
      setPromoMessage(
        err.response?.data?.message ||
          "❌ Invalid or failed promo code"
      );
    }
  };

  // PAYMENT
  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const formdata = new FormData();
      formdata.append("phone", number);
      formdata.append("amount", finalTotal);

      const response = await axios.post(
        "https://kivuti.alwaysdata.net/api/mpesa_payment",
        formdata
      );

      setSuccess(response.data.message || "Payment initiated successfully");
    } catch (err) {
      setError(err.message || "Payment failed");
    }

    setLoading(false);
  };

  return (
    <div className="container py-4">
      <h1 className="text-success mb-4">
        Make Payment - Lipa na M-Pesa
      </h1>

      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate("/")}
      >
        &larr; Back
      </button>

      {/* 🔥 ONE CLEAN CHECKOUT CARD */}
      <div className="card shadow p-4">

        {/* PRODUCTS */}
        {products.map((item) => (
          <div
            key={item.id}
            className="d-flex align-items-center mb-3"
          >
            <img
              src={img_url + item.product_photo}
              alt=""
              style={{
                height: 60,
                width: 60,
                objectFit: "cover",
                marginRight: 10
              }}
            />

            <div className="flex-grow-1">
              <strong>{item.product_name}</strong>
              <div className="text-muted">
                Kes {item.product_cost} × {item.quantity}
              </div>
            </div>

            <div>
              <button
                className="btn btn-sm btn-outline-dark"
                onClick={() => updateQuantity(item.id, -1)}
              >
                -
              </button>

              <span className="mx-2">{item.quantity}</span>

              <button
                className="btn btn-sm btn-outline-dark"
                onClick={() => updateQuantity(item.id, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}

        <hr />

        {/* PROMO */}
        <div className="d-flex gap-2 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />

          <button
            className="btn btn-dark"
            onClick={applyPromo}
          >
            Apply
          </button>
        </div>

        <small>{promoMessage}</small>

        <hr />

        {/* TOTALS */}
        <h5>Total: Kes {totalCost}</h5>
        <h5>Discount: -Kes {discount}</h5>
        <h4 className="text-success">
          Final: Kes {finalTotal}
        </h4>

        <hr />

        {/* PAYMENT SECTION */}
        {success ? (
          <div className="text-center py-4">
            <div style={{ fontSize: "60px", color: "green" }}>
              ✔
            </div>

            <h4 className="text-success mt-2">
              Payment Successful
            </h4>

            <p>{success}</p>

            <button
              className="btn btn-dark mt-3"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <form onSubmit={handlesubmit}>
            {loading && <Loader />}

            {error && (
              <p className="text-danger">{error}</p>
            )}

            <input
              type="tel"
              className="form-control mb-3"
              placeholder="254XXXXXXXXX"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />

            <button
              className="btn btn-dark w-100"
              disabled={loading}
            >
              {loading
                ? "Processing..."
                : `Pay Kes ${finalTotal}`}
            </button>
          </form>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Makepayment;