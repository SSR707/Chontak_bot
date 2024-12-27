import mongoose from "mongoose";

const ChontakSchema = new mongoose.Schema({
    user_id:String,
    key:String,
    value:String
});

export const Chontak = mongoose.model("Chontak", ChontakSchema);
