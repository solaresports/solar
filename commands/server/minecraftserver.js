const discord = require("discord.js");
module.exports = {
    name: 'mcserver',
    category: 'server',
    description: 'mcserver',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Minecraft - Survival")
            .setDescription(`Coming soon`)
            .setColor("#ba90f1")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
