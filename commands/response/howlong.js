const discord = require("discord.js");
module.exports = {
    name: 'howlong',
    category: 'cmds',
    description: 'howlong',
    run: async (bot, message, args, guild) => {

        message.delete().catch(err => console.log(err));

        var botIcon = bot.user.displayAvatarURL;
        var botEmbed = new discord.MessageEmbed()
            .setTitle("ETA For joining a team")
            .setDescription(`    
            There is no ETA for joinign a team.
            We want our teams to be balanced and wellmade.
            This is why we will never rush someone in a team.
            Waiting for a team can take a bit longer if you play a populair role in a game.
            If you want support regarding your application, then please create a ticket!`)
            .setColor("#c73884")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
