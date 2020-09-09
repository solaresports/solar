const discord = require("discord.js");
module.exports = {
    name: 'loladcgold',
    category: 'recruitment',
    description: 'loladcgold',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("League of Legends - Recruitment")
            .setDescription(`There is a position available in an existing team.
                             This team is looking for a Toplaner.
                             Direct message @Aspect#9273 to plan a tryout.`)
            .setColor("#4a77e8")
            .setThumbnail(botIcon)
            .setImage("https://cdn.discordapp.com/attachments/753079584475578408/753093950113579119/Season_2019_-_Gold_1.png")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
