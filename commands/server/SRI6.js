const discord = require("discord.js");
module.exports = {
    name: 'SRI6',
    category: 'server',
    description: 'SRI6',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Verify")
            .setDescription(`    
             Click on the :white_check_mark: icon to verify yourself`)
            .setColor("#5beb34")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
