const discord = require("discord.js");
module.exports = {
    name: 'commands',
    category: 'cmds',
    description: 'commands',
    run: async (bot, message, args, guild) => {

        message.delete().catch(err => console.log(err));

        var botIcon = bot.user.displayAvatarURL;
        var botEmbed = new discord.MessageEmbed()
            .setTitle("Commands")
            .setDescription(` 
            **Moderation**
            /Clear (amount)
            /Warn (name) (reason)
            /Kick (name) (reason)
            /Ban (name) (reason)

            **Staff Commands**
            /Say (bericht)
            /Help
            /Vote (tagg schrijver) (bericht) 

            **Fun Commands**
            /Meme`)
            .setColor("#ebc634")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}