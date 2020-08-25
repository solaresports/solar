const discord = require("discord.js");
module.exports = {
    name: 'test',
    category: 'announcements',
    description: 'test',
    run: async (bot, message, args, guild) => {

        module.exports.run = async (bot, message, args) => {

            let dUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!dUser) return message.channel.send("Can't find user!")
            if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
            let dMessage = args.join(" ").slice(22);

            dUser.send(`${dUser} A moderator from WP Coding Club sent you: ${dMessage}`)

            message.author.send(`${message.author} You have sent your message to ${dUser}`)
        }
    }
}