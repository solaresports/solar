const discord = require("discord.js");
module.exports = {
    name: 'SRI4',
    category: 'server',
    description: 'SRI4',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("How to join a team?")
            .setDescription(`    
             > You can easily and quickly send an application in the chat 📌join-a-team If you need help with this, you can always create a ticket in 📄ask-for-help`)
            .setColor("#8a3df0")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
