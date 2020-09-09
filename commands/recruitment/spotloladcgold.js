const Discord = require("discord.js");
module.exports = {
    name: 'lolgoldadc',
    category: 'recruitment',
    description: 'lolgoldadc',
    run: async (bot, message, args) => {

        const discord = require("discord.js");

        message.delete().catch(err => console.log(err));
        const sayMessage = args.join(" ");
        let dUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!dUser) return message.channel.send("Can't find user!")
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't you that command!")
        let dMessage = args.join(" ").slice(22);
        let successfullyembed = new Discord.MessageEmbed()
        message.channel.send(sayMessage);

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Direct Recruitment")
            .setDescription(`There is a position available in an existing team.
                             DM The person tagged above the message if your intrested.
                             Role and rank requirements:`)
            .setColor("#4a77e8")
            .setThumbnail(botIcon)
            .setImage("https://cdn.discordapp.com/attachments/753079584475578408/753093950113579119/Season_2019_-_Gold_1.png https://cdn.discordapp.com/attachments/753079584475578408/753099897984778321/ap550x55012x121transparentt.u6.png")

        dUser.send(`Hey ${dUser} you placed used a command ${dMessage}
        > Recruitment Messaged Added`)

        return message.channel.send(botEmbed);
    }
}