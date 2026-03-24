import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import logo from "../assets/logo.png.jpg"; // ✅ make sure path is correct
import Footer from "./Footer";

const Signin = () => {
  // form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // status states
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    setLoading("Please wait while we authenticate your account...");
    setError("");
    setSuccess("");

    try {
      const formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      const response = await axios.post(
        "https://kivuti.alwaysdata.net/api/signin",
        formdata
      );

      setLoading("");

      if (response.data.user) {
        setSuccess("Login successful ✅");

        // store user
        localStorage.setItem("user", JSON.stringify(response.data.user));

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setError("Login Failed. Please try again...");
      }
    } catch (err) {
      setLoading("");
      setError("Oops, something went wrong. Try again...");
    }
  };

  return (
    <div className="signin-page">

      {/* ✅ Animated Logo Top Left */}
      <Link to="/">
        <img src={logo} alt="logo" className="logo-top-left animated-logo" />
      </Link>

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4 signin-card">
          <h3 className="text-center mb-3">Welcome Back</h3>

          {/* messages */}
          {loading && <p className="text-warning">{loading}</p>}
          {success && <p className="text-success">{success}</p>}
          {error && <p className="text-danger">{error}</p>}

          <form onSubmit={handlesubmit}>
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="form-control mb-3"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="form-control mb-3"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Forgot password */}
            <div className="text-end mb-3">
              <small>
                <Link to="#">Forgot Password?</Link>
              </small>
            </div>

            {/* Google */}
            <button type="button" className="btn btn-light w-100 mb-3 social-btn">
              <FcGoogle size={20} /> Sign in with Google
            </button>

            {/* Apple */}
            <button type="button" className="btn btn-light w-100 mb-3 social-btn">
              <FaApple size={20} /> Sign in with Apple
            </button>

            {/* Submit */}
            <button type="submit" className="btn btn-primary w-100">
              Sign in
            </button>

            <p className="text-center mt-3">
              Don’t have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Signin;