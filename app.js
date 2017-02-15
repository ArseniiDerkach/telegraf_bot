const Telegraf = require('telegraf');

var token = "328596384:AAGPSAUF3dp1X5uN3XJ3rwXJuibH8z_AUxw";

const app = new Telegraf(token);

app.command('start',
(ctx) => {
  ctx.reply('Hey');
  console.log(ctx.message);
});
app.command('start', (ctx) => ctx.reply('Hey'));
app.on('sticker', (ctx) => ctx.reply('👍'));
app.startPolling();
