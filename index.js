import { bot } from "./src/bot/index.js";
import { connectMongodb } from "./src/config/index.js";

connectMongodb();
console.log("bot start");
bot.start();
