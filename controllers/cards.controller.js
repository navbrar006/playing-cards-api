import Card from "../models/cards.js";

// CREATE card
export const createCard = async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET all cards
export const getCards = async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
};

// GET card by ID
export const getCardById = async (req, res) => {
  const card = await Card.findById(req.params.id);
  res.json(card);
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
