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
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Update Schema to include all relevant fields
const finalOrderSchema = new mongoose.Schema({
  tableNumber: String,
  finalOrder: Array,
  waiter: String,
  orderID: String,
  items: Array,
  name: String,
  phoneNumber: String,
  pickup: String,
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

// Fetch orders with phoneNumber attribute
app.get("/fetch-orders-with-phone", async (req, res) => {
  try {
    const orders = await FinalOrder.find({
      phoneNumber: { $exists: true, $ne: null },
    });
    res.json(orders);
    console.log(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint to delete all entries
app.delete("/delete-all-orders", async (req, res) => {
  try {
    await FinalOrder.deleteMany({});
    console.log("All orders deleted successfully");
    res.status(200).send("All orders deleted successfully");
  } catch (err) {
    console.error("Error deleting all orders:", err);
    res.status(500).send("Error deleting all orders.");
  }
});

// Serve the frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "New folder", "app.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
