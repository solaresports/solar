const Discord = require("discord.js");
module.exports = {
    name: 'loleuwgoldadc',
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
            .setTitle("Recruitment - Europe")
            .setDescription(`Private message the person tagged above this message if you are intrested.

                             **Elo:** Gold
                             **Role:** AD-Carry`)
            .setColor("#4a77e8")
            .setThumbnail(botIcon)
            .setThumbnail("https://cdn.discordapp.com/attachments/745857456307175424/753107466455351406/LOL_Logo.png")
            .setFooter("League of Legends - Recruitment")

        dUser.send(`Hey ${dUser} you placed used a command ${dMessage}
        > Recruitment Messaged Added`)

        return message.channel.send(botEmbed);
    }
}