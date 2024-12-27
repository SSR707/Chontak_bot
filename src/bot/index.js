import { Bot } from "grammy";
import { callback_query, deletee, help, start } from "../command/command.js";
import { addOn } from "../action/on.js";
import { addHears } from "../action/hears.js";
process.myKey = {}
export const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", start);
bot.command("help", help);
bot.command("delete", deletee);
bot.callbackQuery()
bot.hears("Qoshish ➕", addHears);
bot.on("message:text", addOn);
bot.on("callback_query",callback_query);
  