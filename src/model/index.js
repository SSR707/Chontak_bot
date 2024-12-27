import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  first_name: String,
  username: String,
  user_id: String,
});

export const User = mongoose.model("Users", UserSchema);
