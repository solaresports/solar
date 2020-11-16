const discord = require("discord.js");
module.exports = {
    name: 'STI1',
    category: 'server',
    description: 'STI1',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("How to join a team?")
            .setDescription(`    
             > You can join a team by creating a application in here. Use the forms linked in this channel. (you can also apply using the website)
             > After you have submitted an application, it will be reviewed by our recruiters.
             > We check the applications everyday, so wait patiently!`)
            .setColor("#8a3df0")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
