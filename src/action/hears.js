export const addHears = async (ctx) => {
  await ctx.reply(`Istagan ma'lumot turini menga jo'nating 🙂...`, {
    reply_markup: {
      remove_keyboard: true,
    },
  });
};
