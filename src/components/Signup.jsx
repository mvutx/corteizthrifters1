import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import logo from "../assets/logo.png.jpg"; 
import Footer from "./Footer";

const Signup = () => {
  // form states
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Male");

  // status states
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Please wait... Registration in progress");

    try {
      const formdata = new FormData();
      formdata.append("fullname", fullname);
      formdata.append("username", username);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("phone", phone);
      formdata.append("dob", dob);
      formdata.append("gender", gender);

      const response = await axios.post(
        "https://kivuti.alwaysdata.net/api/signup",
        formdata
      );

      setLoading("");
      setSuccess(response.data.message);
      setTimeout(() => setError("") , 5000)

      // clear form
      setFullName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");
      setDob("");
      setGender("Male");

      setTimeout(() => setSuccess(""), 5000);
    } catch (err) {
      setLoading("");
      setError(err.message);
    }
  };

  return (
    <div className="signup-page">
      
      {/* ✅ LOGO TOP LEFT */}
      <Link to="/">
        <img src={logo} alt="logo" className="logo-top-left animated-logo" />
      </Link>

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow signup-card">
          <h3 className="mb-3 text-center">
            Sign up 
          </h3>

          {/* messages */}
          {loading && <p className="text-warning">{loading}</p>}
          {success && <p className="text-success">{success}</p>}
          {error && <p className="text-danger">{error}</p>}

          <form onSubmit={handleSubmit}>
            {/* Full name + Email */}
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control mb-3"
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control mb-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Username + Password */}
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control mb-3"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control mb-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="form-control mb-3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            {/* DOB + Gender */}
            <div className="row">
              <div className="col-md-6">
                <input
                  type="date"
                  className="form-control mb-3"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <select
                  className="form-control mb-3"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Google */}
            <button type="button" className="btn btn-light w-100 mb-3 social-btn">
              <FcGoogle size={20} /> Sign up with Google
            </button>

            {/* Apple */}
            <button type="button" className="btn btn-light w-100 mb-3 social-btn">
              <FaApple size={20} /> Sign up with Apple
            </button>

            {/* Submit */}
            <button type="submit" className="btn btn-primary w-100">
              Sign up
            </button>

            <p className="text-center mt-3">
              Already have an account? <Link to="/signin">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Signup;