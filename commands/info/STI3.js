const discord = require("discord.js");
module.exports = {
    name: 'STI3',
    category: 'server',
    description: 'STI3',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("How does a apply work?")
            .setDescription(`    
             > - Create a application using the forms down bellow.
             > - You will get a status update in 📄applications when we saw that apply.
             > - You will be placed into a team, a chat down bellow the general voice channels will apear.
             > - One of our team managers will introduce you to a team.
             > - You will play a tryout or be added to a new team.`)
            .setColor("#ba90f1")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
