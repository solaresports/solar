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
                             Direct message the person above this message to plan a tryout.`)
            .setColor("#4a77e8")
            .setThumbnail(botIcon)
            .setImage("https://img.rankedboost.com/wp-content/uploads/2014/09/Season_2019_-_Gold_1.png")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
