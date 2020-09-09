const discord = require("discord.js");
module.exports = {
    name: 'askforhelp',
    category: 'cmds',
    description: 'askforhelp',
    run: async (bot, message, args, guild) => {

        message.delete().catch(err => console.log(err));

        var botIcon = bot.user.displayAvatarURL;
        var botEmbed = new discord.MessageEmbed()
            .setTitle("Support")
            .setDescription(`    
            If you need our help, then please visit the chat: (📄ask-for-help)
            You can also join the voice channel: (🕑 Waiting Room) for voice support.
            Please do not DM staff members with your questions.`)
            .setColor("#c73884")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
