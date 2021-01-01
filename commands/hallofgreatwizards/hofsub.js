const Discord = require("discord.js");
module.exports = {
    name: 'hofsub',
    category: 'announcements',
    description: 'hofsub',
    run: async (bot, message, args) => {

        const discord = require("discord.js");

            const sayMessage = args.join(" ");
            let dUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!dUser) return message.channel.send("Kan deze gebruiker niet vinden")
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Dit mag jij niet gebruiken! Foei.")
            let dMessage = args.join(" ").slice(22);
            let successfullyembed = new Discord.MessageEmbed()
            message.delete().catch(err => console.log(err));
            message.channel.send(sayMessage);

            var botIcon = bot.user.displayAvatarURL;

            var botEmbed = new discord.MessageEmbed()
                .setTitle("HALL OF FAME")
                .setDescription(`Dit is een ware held!
                                 Je hebt je plek in de hall of fame dik verdiend!

                                 **Door:** ${dUser}
                                 **Sub:** 6+ MAANDEN`)
                .setFooter("Reageer even met een ❤️")
                .setColor("#56ccb6")
                .setThumbnail("https://icons.iconarchive.com/icons/fixicon/crown/48/napoleon-icon.png")

            return message.channel.send(botEmbed);
        }
}