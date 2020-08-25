const discord = require("discord.js");
module.exports = {
    name: 'cmd3',
    category: 'cmds',
    description: 'cmd3',
    run: async (bot, message, args, guild) => {

        message.delete().catch(err => console.log(err));

        var botIcon = bot.user.displayAvatarURL;
        var botEmbed = new discord.MessageEmbed()
            .setTitle("Moderation")
            .setDescription(`    
            /ban @user Reason
            /clear amount
            /kick @user Reason
            /report @user Message`)
            .setColor("#ebc634")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
