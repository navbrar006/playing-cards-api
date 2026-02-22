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

// import express from "express";
// import { connectDB } from "./config/db.js";
// import cardsRouter from "./routes/cards.routes.js"; // 👈 .js REQUIRED

// const app = express();

// // middleware
// app.use(express.json());

// // connect DB
// connectDB();

// // routes
// app.use("/api/v1/cards", cardsRouter);

// // server
// app.listen(3000, () => {
//   console.log("🚀 Server running on port 3000");
// });
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./config/db.js";
import cardsRouter from "./routes/cards.routes.js";

const app = express();

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("✅ API Running on Vercel");
});

// DB connect middleware (important for serverless)
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("DB error:", err.message);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// Routes
app.use("/api/v1/cards", cardsRouter);

// ❗ Vercel ke liye export
export default app;

// ❗ Local ke liye hi listen
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}