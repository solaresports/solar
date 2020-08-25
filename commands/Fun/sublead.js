const discord = require("discord.js");
module.exports = {
    name: 'sublead',
    category: 'fun',
    description: 'Showing the cool stuff',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Twitch Sub Lead")
            .setDescription(`> Current Lead:
            > Namlessarcher
            > Follw him: https://www.twitch.tv/namlessarcher
            > Lead Amount: 1

            > Wanna be the new sub lead?
            > Dont wait and go to: https://www.twitch.tv/se_aspect`)
            .setColor("#6441a5")
            .setImage("https://cdn.discordapp.com/attachments/743163303110639637/747288553519841300/1024px-Twitch_logo_2019.svg.png")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}