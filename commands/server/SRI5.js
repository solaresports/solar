const discord = require("discord.js");
module.exports = {
    name: 'INFO5',
    category: 'server',
    description: 'INFO5',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Invite your friends")
            .setDescription(`    
             > Wanna help us grow? Invite your friends to our amazing community: https://discord.gg/uSM575F`)
            .setColor("#8a3df0")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
