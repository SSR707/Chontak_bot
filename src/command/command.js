import { Keyboard } from "grammy";
import {
  contakSave,
  deleteChontak,
  getAllData,
  getUser,
  userSave,
} from "../utils/user.js";
import { addOn } from "../action/on.js";


export const start = async (ctx) => {
  const user = await getUser(ctx.update.message.from.id);
  if (!user) {
    const data = {
      first_name: ctx.update.message.from.first_name,
      username: ctx.update.message.from.username,
      user_id: ctx.update.message.from.id,
    };
    await userSave(data);
  }
  const keyboard = new Keyboard().text("Qoshish ➕").resized().oneTime();
  await ctx.reply(
    `<b>Assalamu alaykum,${ctx.update.message.from.first_name}  🎉</b>`,
    {
      parse_mode: "HTML",
    }
  );
  await ctx.reply(
    `Cho'ntak bot orqali siz har qanday ma'lumotni saqlab, uni telegramdagi ixtiyoriy chatga tezlik bilan jo'natish imkoniga ega bo'lasiz! 

Ma'lumot qo'shish uchun pastdagi 'Qo'shish' tugmasini bosing va kalit so'z bering.`,
    { parse_mode: "HTML", reply_markup: keyboard }
  );
};

export const help = async (ctx) => {
  await ctx.reply(`
        Buyruqlar: 
/start - Botni qayta ishga tushirish
/help - Yordam
/add - Yangi ma'lumot qo'shish
/delete - Ma'lumot o'chirish`);
};

export const deletee = async (ctx) => {
  const keyboard = await getAllData(String(ctx.update.message.from.id));
  await ctx.reply(`Qaysi ma'lumotni o'chirishni istaysiz?`, {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: keyboard },
  });
};

export const callback_query = async (ctx) => {
    console.log(ctx.callbackQuery)
  let callbackData = ctx.callbackQuery.data;
  if (callbackData === "confirm" && process.myKey.key) {
    await ctx.editMessageText(`Ma'lumot muvaffaqiyatli qo'shildi! 🥳`, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [],
      },
    });
    contakSave(process.myKey);
    process.myKey = {}
  } else if (callbackData === "edit") {
    await ctx.editMessageText(
      `Qaytadan boshlaymizmi? 
    
Ok! 
    
Istagan ma'lumot turini menga jo'nating 🙂...`,
      {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [],
        },
      }
    );
    process.myKey = {}
  } else {
    await deleteChontak(callbackData);
    console.log(callbackData);
    await ctx.reply(`O'chirish muvaffaqiyatli amalga oshdi! 
      
      Ma'lumot qo'shish uchun : /add 
      
      Ma'lumot o'chirish uchun : /delete 
      
       Yordam olish uchun : /help`);
  }
};
