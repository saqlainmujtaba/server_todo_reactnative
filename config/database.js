import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    // const { connection } = await mongoose.connect(process.env.MONGO_URI);
    const { connection } = await mongoose.connect("mongodb://127.0.0.1:27017/todoApp");
    console.log(`MongoDB connected: ${connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
