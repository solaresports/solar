const Discord = require("discord.js");
module.exports = {
    name: 'badge100',
    category: 'badges',
    description: 'badge100',
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
            .setTitle("100% BADGE")
            .setDescription(`**Badge:** 100%
                             **Requirements:** 
                             - You helped someone in need.
                                 `)
            .setColor("#566fba")
            .setThumbnail("https://cdn.discordapp.com/attachments/753079584475578408/753593834663051274/Solar100.png")
            .setFooter("You can only earn a badge if you achieve the conditions above")

        dUser.send(`${dUser} Badge added to the discord ${message.author}
                       Message made by ${ message.author}: ${dMessage}`)

        return message.channel.send(botEmbed);
    }
}