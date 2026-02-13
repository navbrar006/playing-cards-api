import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  suit: {
    type: String,
    required: true,
    enum: ["Hearts", "Diamonds", "Clubs", "Spades"]
  },
  value: {
    type: String,
    required: true
  }
});

export default mongoose.model("Card", cardSchema);
