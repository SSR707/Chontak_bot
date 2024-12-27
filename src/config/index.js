import mongoose from "mongoose";

export const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.DATABSE_URI);
  } catch (err) {
    throw new Error(err.message);
  }
};
