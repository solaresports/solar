const discord = require("discord.js");
module.exports = {
    name: 'INFO3',
    category: 'server',
    description: 'INFO3',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Nodig je vrienden uit")
            .setDescription(`    
             Natuurlijk is gezelligheid altijd welkom, wil jij samen met je vrienden hier wat gamen. Nodig ze dan vooral uit. Dit kan je doen met de volgende invite link: https://discord.gg/9rwdUjZata`)
            .setColor("#8a3df0")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
