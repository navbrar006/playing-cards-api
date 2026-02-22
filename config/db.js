// const mongoose = require("mongoose"); 
// export const connectDB = async() => {
//   try{
//     await mongoose.connect("mongodb+srv://navbrar006_db_user:Navkiran2006@cluster0.kexnjhw.mongodb.net/Experiment4",{
//       useNewUrlParser : true,
//       useUnifiedTopology : true,

//     });
//     console.log("MongoDB connected");
//   } 
//   catch (error){
//     console.log("MongoDB connection failed",error.message);
//     process.exit(1);
//   }
// }
// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://navbrar006_db_user:navkiran2006@cluster0.kexnjhw.mongodb.net/Experiment4"
//     );
//     console.log("✅ MongoDB connected");
//   } catch (error) {
//     console.log("❌ MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.log("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};


