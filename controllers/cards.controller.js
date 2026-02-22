import Card from "../models/cards.js";

// GET all cards
export const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create card
export const createCard = async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(201).json(card);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE card
export const updateCard = async (req, res) => {
  const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(card);
};

// DELETE card
export const deleteCard = async (req, res) => {
  await Card.findByIdAndDelete(req.params.id);
  res.json({ message: "Card deleted" });
};
