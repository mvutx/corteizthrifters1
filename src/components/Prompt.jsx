import React, { useState, useEffect } from "react";

const Prompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Show the prompt automatically after 2 seconds, only if not seen before
  useEffect(() => {
    const hasSeenPrompt = localStorage.getItem("seenPrompt");
    if (!hasSeenPrompt) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading("Submitting...");
    setError("");
    setSuccess("");

    try {
      // Replace this with real backend call
      // await axios.post("/api/subscribe", { email });

      // simulate success
      setLoading("");
      setSuccess("Subscribed successfully! Thank you.");
      setEmail("");

      // Save that user has seen/done the prompt
      localStorage.setItem("seenPrompt", "true");

      setTimeout(() => setSuccess(""), 5000);
      setShowPrompt(false);
    } catch (err) {
      setLoading("");
      setError("Failed to subscribe. Try again later.");
      setTimeout(() => setError(""), 5000);
    }
  };

  const handleClose = () => {
    setShowPrompt(false);
    localStorage.setItem("seenPrompt", "true"); // mark as seen
  };

  if (!showPrompt) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          width: "90%",
          maxWidth: "400px",
          textAlign: "center",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          position: "relative",
        }}
      >
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            background: "transparent",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          &times;
        </button>

        <h3>Subscribe to our Emails</h3>
        <p>Get updates and offers directly in your inbox.</p>

        <form onSubmit={handleSubscribe} style={{ marginTop: "15px" }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px",
              width: "80%",
              marginRight: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 15px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </form>

        {loading && <p style={{ color: "orange", marginTop: "10px" }}>{loading}</p>}
        {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Prompt;