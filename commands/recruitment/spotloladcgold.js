const discord = require("discord.js");
module.exports = {
    name: 'loladcgold',
    category: 'recruitment',
    description: 'loladcgold',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Direct Recruitment")
            .setDescription(`There is a position available in an existing team.
                               
                             **Game:** League of Legends
                             **Role:** Toplane
                             **Elo:** Gold`)
            .setColor("#4a77e8")
            .setThumbnail(botIcon)
            .setImage("https://cdn.discordapp.com/attachments/753079584475578408/753093950113579119/Season_2019_-_Gold_1.png")
            .setFooter("You can always apply in (📌join-a-team) This are just direct open spots.")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
