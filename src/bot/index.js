import { Bot } from "grammy";
import {
  callback_query,
  deletee,
  getAll,
  help,
  start,
} from "../command/command.js";
import { addOn } from "../action/on.js";
import { addHears } from "../action/hears.js";
process.myKey = {};
export const bot = new Bot(process.env.BOT_TOKEN);
const commands = [
  { command: "start", description: "Botni ishga tushirish" },
  { command: "help", description: "Barcha buyruqlar haqida ma'lumot" },
  { command: "delete", description: "Malumot ochirish" },
  { command: "getall", description: "Barcha malumotlarni korish" },
];

(async () => {
  try {
    await bot.api.setMyCommands(commands);
    console.log("Buyruqlar muvaffaqiyatli o'rnatildi!");
  } catch (error) {
    console.error("Buyruqlarni o'rnatishda xatolik yuz berdi:", error);
  }
})();

bot.command("start", start);
bot.command("help", help);
bot.command("delete", deletee);
bot.command("getall", getAll);
bot.callbackQuery();
bot.hears("Qoshish ➕", addHears);
bot.on("message:text", addOn);
bot.on("callback_query", callback_query);
