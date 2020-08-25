const discord = require("discord.js");
module.exports = {
    name: 'cmd5',
    category: 'cmds',
    description: 'cmd5',
    run: async (bot, message, args, guild) => {

        message.delete().catch(err => console.log(err));

        var botIcon = bot.user.displayAvatarURL;
        var botEmbed = new discord.MessageEmbed()
            .setTitle("Status")
            .setDescription(`    
            /statuscsgo
            /statuslol
            /statusval
            /statusrainbow
            /teaminfolol
            /teaminfoval
            /newteam`)
            .setColor("#ebc634")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
