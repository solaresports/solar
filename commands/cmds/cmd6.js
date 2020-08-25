const discord = require("discord.js");
module.exports = {
    name: 'cmd6',
    category: 'cmds',
    description: 'cmd6',
    run: async (bot, message, args, guild) => {

        message.delete().catch(err => console.log(err));

        var botIcon = bot.user.displayAvatarURL;
        var botEmbed = new discord.MessageEmbed()
            .setTitle("Teams")
            .setDescription(`    
            /training`)
            .setColor("#ebc634")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
