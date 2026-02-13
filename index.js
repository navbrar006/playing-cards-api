// import { connectDB } from "./config/db.js";

// connectDB();

// console.log("🚀 App running");
// import express from "express";
// import cardsRouter from "./routes/cards.routes";
// const app =express();
// app.use(express.json());
// app.use("/api/v1/cards",cardsRouter);
// app.listen(3000,()=>
//  console.log("Server running on port 3000"));

import express from "express";
import { connectDB } from "./config/db.js";
import cardsRouter from "./routes/cards.routes.js"; // 👈 .js REQUIRED

const app = express();

// middleware
app.use(express.json());

// connect DB
connectDB();

// routes
app.use("/api/v1/cards", cardsRouter);

// server
app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});



