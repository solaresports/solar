const discord = require("discord.js");
module.exports = {
    name: 'helpme',
    category: 'fun',
    description: 'Showing the cool stuff',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("S O S - HELP ME")
            .setDescription(`> THE PERSON THAT MADE ME
            > IS MAKING ME DO WIERD STUFF
            > CALL 911 HELP ME!
            > MY NAME IS SOLLAR

            > FFS WHAT ER U WAITING FOR`)
            .setColor("#6441a5")
            .setImage("https://tenor.com/view/punk-scary-strange-gif-5093608")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}