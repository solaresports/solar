const Discord = require("discord.js");
module.exports = {
    name: 'badgefounder',
    category: 'badges',
    description: 'badgefounder',
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
            .setTitle("FOUNDER")
            .setDescription(`**Badge:** Founder
                             **Requirements:** 
                             - You are a Solar Founder.
                                 `)
            .setColor("#566fba")
            .setThumbnail("https://cdn.discordapp.com/attachments/753079584475578408/753601554015322162/SolarFounder.png")
            .setFooter("You can only earn this badge if you achieve the conditions above. - Solar eSports 2020 Official")

        dUser.send(`${dUser} Badge added to the discord ${message.author}
                       Message made by ${ message.author}: ${dMessage}`)

        return message.channel.send(botEmbed);
    }
}