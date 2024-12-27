import { contakSave } from "../utils/user.js";
import { Keyboard } from "grammy";
export const addOn = async (ctx) => {
  if (!process.myKey.value) {
    process.myKey.value = ctx.message.text;
    const msgId = ctx.msg.message_id;
    await ctx.reply(
      `Endi kalit so'z yuboring! 
    
Aynan shu kalit so'z orqali bu ma'lumotni chatda jo'natasiz. Shuning uchun, kalit so'zni eslab qoling!`,
      { reply_to_message_id: msgId }
    );
  } else if (!process.myKey.key) {
    process.myKey.key = ctx.message.text;
    process.myKey.user_id = ctx.update.message.from.id;
    await ctx.reply(`Kalit so'z : ${process.myKey.key}

Tekst : ${process.myKey.value}`);
    await ctx.reply(`Endi ma'lumot va kalit so'zni tasdiqlang!`, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "Tasdiqlash ✅", callback_data: "confirm" }],
          [{ text: "Tahrirlash 📝", callback_data: "edit" }],
        ],
      },
    });
  }else{
    await ctx.reply(`❗Iltimos oldingi kiritgan malumotingizni tastiklang ❗
Endi ma'lumot va kalit so'zni tasdiqlang!`, {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [{ text: "Tasdiqlash ✅", callback_data: "confirm" }],
            [{ text: "Tahrirlash 📝", callback_data: "edit" }],
          ],
        },
      })
  }
};
