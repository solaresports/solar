const Discord = require("discord.js");
module.exports = {
    name: 'recruit',
    category: 'announcements',
    description: 'recruit',
    run: async (bot, message, args) => {

        const discord = require("discord.js");

            const sayMessage = args.join(" ");
            let dUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!dUser) return message.channel.send("Can't find user!")
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't you that command!")
            let dMessage = args.join(" ").slice(22);
            let successfullyembed = new Discord.MessageEmbed()
            message.delete().catch(err => console.log(err));

            var botIcon = bot.user.displayAvatarURL;

            var botEmbed = new discord.MessageEmbed()
                .setTitle("DIRECT RECRUITMENT")
                .setDescription(`**Posted By:** ${message.author}
                                 **Looking for:** ${dMessage}

                                 **Contact:** ${dUser}
                                 `)
                .setColor("#a174e8")
                .setThumbnail("https://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/48/megaphone-icon.png")

            dUser.send(`${dUser} a team recruitment post has been made by ${message.author}
                       Message made by ${ message.author}: ${dMessage}`)

            return message.channel.send(botEmbed);
        }
}