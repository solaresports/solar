const Discord = require("discord.js");
module.exports = {
    name: 'badgeplayer',
    category: 'badges',
    description: 'badgeplayer',
    run: async (bot, message, args) => {

        const discord = require("discord.js");

        const sayMessage = args.join(" ");
        let dUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!dUser) return message.channel.send("Can't find user!")
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't you that command!")
        let dMessage = args.join(" ").slice(22);
        let successfullyembed = new Discord.MessageEmbed()
        message.delete().catch(err => console.log(err));

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("PLAYER BADGE")
            .setDescription(`You can earn badges in many ways. You unlock things with the exception of badges. Think of private events and other things here. So this only has advantages!
                             **Badge:** Player
                             **Requirements:** 
                             > Be a non-toxic person.
                             > Play in a solar team.
                                 `)
            .setColor("#99e8d2")
            .setThumbnail("https://cdn.discordapp.com/attachments/753079584475578408/753593830573473892/SolarPlayer.png")

        dUser.send(`${dUser} Badge added to the discord ${message.author}
                       Message made by ${ message.author}: ${dMessage}`)

        return message.channel.send(botEmbed);
    }
}