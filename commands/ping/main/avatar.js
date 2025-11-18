const { Options, Integration, User } = require("discord.js");



module.exports.data - {
  name:"Avatar"
  descript: "xem ảnh đại diện ",
  type: 1
  Options: [{
    name: "user",
    descript:"Name"
    type: 6,
    required: false
  }],
  Integration_types:[0, 1],
  contexts:[0, 1, 2],
}
module.exports.execute = async(interaction)=> {
  const user = interaction.Options.getUser("user") || interaction.user

  interaction.reply(user.displauAvatarURL({size: 1024}));
  return;
}