import React from "react";
import Footer from "./Footer";

const Aboutus = () => {
  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        color: "white",
        minHeight: "100vh"
      }}
      className="container-fluid px-3 py-5"
    >

      {/* 🔥 HERO */}
      <div className="text-center mb-5">
        <h1 style={{ fontSize: "3rem", letterSpacing: "3px" }}>
          SACRED VANITY
        </h1>

        <h4 style={{ color: "#00ffcc", marginTop: "10px" }}>
          STAY SANE
        </h4>

        <p
          className="mt-3"
          style={{ maxWidth: "600px", margin: "auto", color: "#aaa" }}
        >
          In a world full of noise, pressure, and distraction —
          Sacred Vanity is your reminder to stay grounded.
        </p>
      </div>

      {/* 🧠 MEANING */}
      <div className="text-center mb-5">
        <h3 style={{ borderBottom: "2px solid #00ffcc", display: "inline-block" }}>
          What It Means
        </h3>

        <p className="mt-4" style={{ color: "#ccc", maxWidth: "700px", margin: "auto" }}>
          Sacred Vanity is not just clothing — it’s a mindset.
        </p>

        <p style={{ color: "#aaa", maxWidth: "700px", margin: "auto" }}>
          It represents protecting your mind in a chaotic world.
          Staying grounded, focused, and true to yourself while everything around
          you tries to distract, pressure, or break you.
        </p>

        <p style={{ color: "#aaa", maxWidth: "700px", margin: "auto" }}>
          It’s about choosing clarity over chaos. Discipline over noise.
          Identity over influence.
        </p>
      </div>

      {/* 💻 DIGITAL SECTION */}
      <div className="text-center mb-5">
        <h3 style={{ borderBottom: "2px solid #ff00ff", display: "inline-block" }}>
          Digital Identity
        </h3>

        <p className="mt-4" style={{ color: "#aaa", maxWidth: "700px", margin: "auto" }}>
          Sacred Vanity exists at the intersection of fashion and digital culture.
        </p>

        <p style={{ color: "#aaa", maxWidth: "700px", margin: "auto" }}>
          In a world driven by screens, algorithms, and endless scrolling —
          we create pieces that remind you to stay real.
        </p>

        <p style={{ color: "#aaa", maxWidth: "700px", margin: "auto" }}>
          This is more than style. It’s a signal.
        </p>
      </div>

      {/* 🔥 CORE VALUES */}
      <div className="text-center mb-5">
        <h3 style={{ borderBottom: "2px solid #00ffcc", display: "inline-block" }}>
          Core Philosophy
        </h3>

        <div className="row mt-4">
          <div className="col-md-4">
            <h5 style={{ color: "#00ffcc" }}>Stay Grounded</h5>
            <p style={{ color: "#aaa" }}>
              No matter the chaos around you, remain centered.
            </p>
          </div>

          <div className="col-md-4">
            <h5 style={{ color: "#00ffcc" }}>Stay Focused</h5>
            <p style={{ color: "#aaa" }}>
              Discipline over distraction. Always.
            </p>
          </div>

          <div className="col-md-4">
            <h5 style={{ color: "#00ffcc" }}>Stay True</h5>
            <p style={{ color: "#aaa" }}>
              Never lose yourself trying to fit into the world.
            </p>
          </div>
        </div>
      </div>

      {/* ⚡ STATEMENT */}
      <div
        className="text-center p-4"
        style={{
          borderTop: "1px solid #333",
          borderBottom: "1px solid #333"
        }}
      >
        <h2 style={{ color: "#00ffcc", letterSpacing: "1px" }}>
          STAY SANE IN A WORLD DESIGNED TO DISTRACT YOU
        </h2>
      </div>

      {/* 👕 FINAL NOTE */}
      <div className="text-center mt-5">
        <p style={{ color: "#aaa", maxWidth: "600px", margin: "auto" }}>
          Sacred Vanity is not just what you wear — it’s what you stand for.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Aboutus;