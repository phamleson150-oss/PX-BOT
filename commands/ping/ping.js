const { Options, Integration } = require("discord.js");



module.exports.data - {
  name:"ping"
  descript: "xem ping của bot",
  type: 1
  Options: [],
  Integration_types:[0, 1],
  contexts:[0, 1, 2],
}
module.exports.execute = async(interaction)=> {
  const ping = interaction.client.ws.ping;
  interaction.reply(ping);
  return;
}