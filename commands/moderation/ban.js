const Discord = require("discord.js");
module.exports= {
  name: 'ban',
  category: 'moderation',
  description: 'ban a members',
  run: async(client,message,args,guild) => {
    let banned = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");

      message.delete().catch(err => console.log(err));

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
          .setColor("#9614c9")
      message.channel.send(baninfoembed);
  
      return;
    }
  
    if (message.author === banned) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
          .setTitle(`Avoc Strafcenter`)
          .setDescription(`Je kan je zelf niet straffen!`)
          .setColor("#9614c9")
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
        let noreasonembed = new Discord.MessageEmbed()
        .setTitle(`Avoc Strafcenter`)
        .setDescription(`Waarom is deze persoon stout?`)
        .setColor("#9614c9")
      message.channel.send(noreasonembed);
  
      return;
    }
  
    if (!message.member.permissions.has("BAN_MEMBERS")) {
        let nopermsembed = new Discord.MessageEmbed()
        .setTitle(`Avoc Strafcenter`)
        .setDescription(
          "Je kunt deze spreuk nog niet uitvoeren, even oefenen dus!"
        )
          .setColor("#66f3c9")
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
          .setDescription(
            "Je kunt deze spreuk nog niet uitvoeren, even oefenen dus!"
        )
          .setColor("#66f3c9")
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.members.ban(banned, { reason: reason });
  
    let successfullyembed = new Discord.MessageEmbed()
        .setColor("#66f3c9")
        .setTitle(`${banned.tag} You have been banned`)
        .setDescription(`Banned user: ${banned.tag}
        Banned by: ${message.author}
        Reason: ${reason}`)
        .setThumbnail("https://www.google.nl/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fwizard-gifs&psig=AOvVaw1a1nmhVPApt2xBdMeksU2M&ust=1609624212569000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjvk83b--0CFQAAAAAdAAAAABAD")
  
    message.channel.send(successfullyembed);
  }
}
