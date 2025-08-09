// import mongoose from "mongoose";
// // COnnect the mogodb databse

// const connectDB = async () => {
//   mongoose.connection.on("connect", () => console.log("Database Connected"));
//   await mongoose.connect(`${process.env.MONGODB_URL}/lms`);
// };

// export default connectDB;
import mongoose from "mongoose";

// Connect to the MongoDB database
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("✅ Database Connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });

    await mongoose.connect(`${process.env.MONGODB_URL}/lms`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("❌ Could not connect to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
