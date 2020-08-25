const discord = require("discord.js");
module.exports = {
    name: 'cmd2',
    category: 'cmds',
    description: 'cmd2',
    run: async (bot, message, args, guild) => {

        message.delete().catch(err => console.log(err));

        var botIcon = bot.user.displayAvatarURL;
        var botEmbed = new discord.MessageEmbed()
            .setTitle("Fun Commands")
            .setDescription(`    
            /helpme
            /meme
            /sublead
            /trivia`)
            .setColor("#ebc634")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
