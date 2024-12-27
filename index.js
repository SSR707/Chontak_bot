import { bot } from "./src/bot/index.js";
import { connectMongodb } from "./src/config/index.js";
import express from "express";

const app = express();
app.use("/", (req, res) => {
  res.send("Telegram bot ishlayapti!");
});
app.listen(process.env.PORT, () => {
  connectMongodb();
  console.log("bot start");
  bot.start();
  console.log(process.env.PORT + " server started");
});