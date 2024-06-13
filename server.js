const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://sukhchain03:KADImajra@cluster0.ursn5kl.mongodb.net/KOT";

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "New folder")));

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Update Schema to include orderID
const finalOrderSchema = new mongoose.Schema({
  tableNumber: String,
  finalOrder: Array,
  waiter: String,
  orderID: String, // New field for the order ID
});
const FinalOrder = mongoose.model("Order", finalOrderSchema);

// Handle POST requests for final orders
app.post("/submit-final-order", async (req, res) => {
  const newFinalOrder = new FinalOrder(req.body);

  try {
    await newFinalOrder.save();
    console.log("Final order saved successfully");
    res.status(200).send("Final order received and processed");
  } catch (err) {
    console.error("Error saving final order:", err);
    res.status(500).send("Error processing final order.");
  }
});

// Serve the frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "New folder", "app.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
