import React from 'react';
import { useCart } from '../Addcart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h3>Your cart is empty 🛒</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
          Back to Shop
        </button>
      </div>
    );
  }

  const totalCost = cart.reduce(
    (acc, item) => acc + item.product_cost * item.quantity,
    0
  );

  return (
    <div className="container py-5">
      <h3>Your Cart 🛒</h3>

      <div className="alert alert-info mt-3">
        To increase or adjust item quantity, please proceed to checkout.
      </div>

      {/* Table for larger screens */}
      <div className="d-none d-md-block table-responsive">
        <table className="table table-hover mt-4 align-middle">
          <thead className="table-light">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="d-flex align-items-center">
                  <img
                    src={"https://kivuti.alwaysdata.net/static/images/" + item.product_photo}
                    alt={item.product_name}
                    style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "10px" }}
                  />
                  {item.product_name}
                </td>
                <td>Kes {item.product_cost}</td>
                <td>{item.quantity}</td>
                <td>Kes {item.product_cost * item.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for mobile */}
      <div className="d-block d-md-none mt-4">
        {cart.map((item) => (
          <div key={item.id} className="card mb-3">
            <div className="card-body d-flex align-items-center">
              <img
                src={"https://kivuti.alwaysdata.net/static/images/" + item.product_photo}
                alt={item.product_name}
                style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "10px" }}
              />
              <div className="flex-grow-1">
                <h6 className="card-title mb-1">{item.product_name}</h6>
                <p className="mb-1">Price: Kes {item.product_cost}</p>
                <p className="mb-1">Qty: {item.quantity}</p>
                <p className="mb-1">Subtotal: Kes {item.product_cost * item.quantity}</p>
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <h4 className="mt-3">Total: Kes {totalCost}</h4>
      <button
        className="btn btn-success mt-2"
        onClick={() => navigate('/makepayment', { state: { cart } })}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;