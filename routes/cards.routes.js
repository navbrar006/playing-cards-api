import express from "express";
import { getAllCards, createCard } from "../controllers/cards.controller.js";

const router = express.Router();

// Test route (to confirm router is connected)
router.get("/", (req, res) => {
  res.json({ message: "✅ /api/v1/cards route working" });
});

// Actual APIs
router.get("/all", getAllCards);
router.post("/create", createCard);

export default router;
