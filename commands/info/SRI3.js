const discord = require("discord.js");
module.exports = {
    name: 'INFO3',
    category: 'server',
    description: 'INFO3',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("About us")
            .setDescription(`    
             > We are a international esports organisation. We create teams, casual and competitive. Also organise tournaments, and is helping people to reach there goals. We offer coaching and training to teams that show us there motivation. Also we are highly motivated in helping you reach your goals. A little bit of history about us. We are an organization that was originally founded in 2015, after a reorganization we continued under a different name about 3 months ago. We focus on a fun and educational community. We want to be there for our players and guide them. Whether these are new players who still have a lot to learn, or professional players that we guide at a higher level. Our goals are always focused on our players.`)
            .setColor("#8a3df0")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
