const discord = require("discord.js");
module.exports = {
    name: 'cmd4',
    category: 'cmds',
    description: 'cmd4',
    run: async (bot, message, args, guild) => {

        message.delete().catch(err => console.log(err));

        var botIcon = bot.user.displayAvatarURL;
        var botEmbed = new discord.MessageEmbed()
            .setTitle("Server")
            .setDescription(`    
            /ArkServer
            /MinecraftServer
            /SRI1
            /SRI2
            /SRI3
            /SRI4
            /SRI5
            /STI1
            /STI2
            /STI3
            /STI4`)
            .setColor("#ebc634")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
