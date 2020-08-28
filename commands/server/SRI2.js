const discord = require("discord.js");
module.exports = {
    name: 'SRI2',
    category: 'server',
    description: 'SRI2',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Need our help?")
            .setDescription(`    
            > Do you need help from our staff members? Or do you want to create a report? Then go to the channel: ask for help. and create a ticket. Once you have done this, we will try to help you as soon as possible!`)
            .setColor("#8a3df0")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
