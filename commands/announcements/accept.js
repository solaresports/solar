const Discord = require("discord.js");
module.exports = {
    name: 'accept',
    category: 'announcements',
    description: 'accept',
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
                .setTitle("SOLAR - APPLICATIONS")
                .setDescription(`Congratulations! You are hereby officially accepted as a server member! We will start looking for a team for you in short order, but for now you have access to all our channels and voice channels. Once we have found a team for you, we will let you know. Do you have questions ? The easiest way to do this is by creating a ticket or by joining the voice support waiting room.

                                 **Applicant:** ${dUser}
                                 **Approved By:** ${message.author}`)
                .setColor("#6cf567")
                .setThumbnail("https://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/48/check-icon.png")

            dUser.send(`${dUser} An application status update by ${message.author}
        You are hereby officially accepted as a server member!
        We will start looking for a team for you in short order, but for now you have access to all our channels and voice channels.
        Once we have found a team for you, we will let you know.

        Do you have questions?
        The easiest way to do this is by creating a ticket or by joining the voice support waiting room.

        Notes made by ${message.author}: ${dMessage}`)

            message.author.send(`${message.author} You have accepted ${dUser} as a member`)

            return message.channel.send(botEmbed);
        }
}