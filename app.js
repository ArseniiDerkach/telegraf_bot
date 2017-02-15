const Telegraf = require('telegraf');

var token = "328596384:AAGPSAUF3dp1X5uN3XJ3rwXJuibH8z_AUxw";

const bot = new Telegraf(token);


const timezone = 2;

function getSeconds(unixTime) {
    var seconds = unixTime % 60;
    if (seconds.toString().length==1) {
         return '0'+seconds;
    } else {
        return seconds;
    }
}

function getMinutes(unixTime) {
    var minutes = Math.floor(unixTime / 60) % 60;
    if (minutes.toString().length==1) {
         return '0'+minutes;
    } else {
        return minutes;
    }
}
function getHours(unixTime) {
    var absTime = Math.floor(unixTime / 3600) % 24 ;
    return (absTime + timezone) % 24;
}


// bot.on('text', (ctx) => {console.log(bot)});
// bot.command('start',
// (ctx) => {
//   ctx.reply('Hey');
//   console.log(ctx.message);
// });
// // Testing time command
// bot.command('time',
// (ctx) => {
//   var date = ctx.message.date;
//   console.log(ctx.message.date);
//   ctx.reply('Time is '+getHours(date)+':'+getMinutes(date)+':'+getSeconds(date));
// });
//
// bot.on('sticker', (ctx) => ctx.reply('👍'));
// bot.startPolling();
bot.on('/start',
(ctx) => {
  ctx.reply('Hey');
  console.log(ctx.message);
});
bot.on('text', (ctx) => {
  // Simple usage
  // ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)

  // Using shortcut
  console.log(ctx);
  ctx.reply(`Hello `+ctx.message.from.first_name+' '+ctx.message.from.last_name)
})

bot.on('/quit', (ctx) => {
  // Simple usage
  ctx.telegram.leaveChat(ctx.message.chat.id)

  // Using shortcut
  ctx.leaveChat()
})

bot.on('callback_query', (ctx) => {
  // Simple usage
  ctx.telegram.answerCallbackQuery(ctx.callbackQuery.id)

  // Using shortcut
  ctx.answerCallbackQuery()
})

bot.on('inline_query', (ctx) => {
  const result = []
  // Simple usage
  ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result)

  // Using shortcut
  ctx.answerInlineQuery(result)
})

bot.startPolling();
