import express from "express";
import Booking from "../models/booking.js";

const router = express.Router();

// CREATE booking
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ message: "Booking saved!", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all bookings
router.get("/", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

export default router;
