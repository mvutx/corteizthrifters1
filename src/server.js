const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// PROMO CODES
const promoCodes = {
  SAVE10: { type: "percent", value: 10 },
  LESS500: { type: "fixed", value: 500 },
  SACRED20: { type: "percent", value: 20 }
};

app.post("/api/apply-code", (req, res) => {
  console.log("REQUEST RECEIVED:", req.body);

  const { code, total } = req.body;

  if (!code || !total) {
    return res.status(400).json({ message: "Missing code or total" });
  }

  const promo = promoCodes[code];

  if (!promo) {
    return res.status(400).json({ message: "Invalid promo code" });
  }

  let discount = 0;

  if (promo.type === "percent") {
    discount = (promo.value / 100) * total;
  } else {
    discount = promo.value;
  }

  res.json({
    discount,
    message: "Promo applied successfully"
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});