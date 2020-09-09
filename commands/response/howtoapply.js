const discord = require("discord.js");
module.exports = {
    name: 'howtoapply',
    category: 'cmds',
    description: 'howtoapply',
    run: async (bot, message, args, guild) => {

        message.delete().catch(err => console.log(err));

        var botIcon = bot.user.displayAvatarURL;
        var botEmbed = new discord.MessageEmbed()
            .setTitle("ETA For joining a team")
            .setDescription(`    
            You can apply using the channel (📌join-a-team)
            We will announce your application status in (🔔applications) as soon as we reviewd it.`)
            .setColor("#c73884")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
