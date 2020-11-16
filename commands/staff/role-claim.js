const discord = require("discord.js");
module.exports = {
    name: 'claim',
    category: 'staff',
    description: 'claim',
    run: async (bot, message, args, guild) => {

        message.delete()

        let RolesEmbed = new Discord.RichEmbed()
            .setTitle("Server Roles")
            .setColor("#2ac075")
            .setDescription("Embed van icon")

        mesage.channel.send(RolesEmbed).then(async msg => {
            msg.react("discordcode")
            msg.react("discordcode")
            msg.react("discordcode")
            msg.react("discordcode")
        })
    }
}