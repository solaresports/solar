const Discord = require("discord.js");
module.exports= {
  name: 'ban',
  category: 'moderation',
  description: 'ban a members',
  run: async(client,message,args,guild) => {
    let banned = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
  
    // MESSAGES
  
    if (!banned) {
      let baninfoembed = new Discord.MessageEmbed()
        .setTitle("Command: ban")
        .setDescription(
          `**Description:** Ban a member, optional time limit. \n` +
            "**Sub Commands:**\n" +
            "-ban save | Ban a user and save their messages in chat. \n" +
            "**Usage:**\n" +
            "-ban [user] (limit) (reason) \n" +
            "-ban save [user] (limit) (reason) \n" +
            "**Examples:** \n" +
            "-ban <@597253939469221891> 48h spam \n" +
            "-ban save <@597253939469221891> 48h spam "
        )
          .setColor("#66f3c9")
      message.channel.send(baninfoembed);
  
      return;
    }
  
    if (message.author === banned) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
          .setTitle(`Solar Punishment`)
          .setDescription(`You cannot ban your self`)
          .setColor("#66f3c9")
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
        let noreasonembed = new Discord.MessageEmbed()
        .setTitle(`Solar Punishment`)
        .setDescription(`Enter a reason`)
        .setColor("#66f3c9")
      message.channel.send(noreasonembed);
  
      return;
    }
  
    if (!message.member.permissions.has("BAN_MEMBERS")) {
        let nopermsembed = new Discord.MessageEmbed()
        .setTitle(`Solar Punishment`)
        .setDescription(
          "You do not have permissions to do this!"
        )
          .setColor("#66f3c9")
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
          .setDescription(
            "You do not have permissions to do this!"
        )
          .setColor("#66f3c9")
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.members.ban(banned, { reason: reason });
  
    let successfullyembed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`${banned.tag} has been successfully banned.`)
        .setDescription(`Banned user: ${banned.tag}
        Banned by: ${message.author}
        Reason: ${reason}`)
        .setImage("https://icons.iconarchive.com/icons/icons8/windows-8/32/City-Police-Badge-icon.png")
  
    message.channel.send(successfullyembed);
  }
}
