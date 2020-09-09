const Discord = require("discord.js");
module.exports = {
    name: 'teamad',
    category: 'announcements',
    description: 'teamad',
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
                                 There currently is a open spot in a running team. This means that we are looking for a player right away.
                                 You can always apply for a new team, this is just for already running solar teams. 
          
                                 **Looking for:** ${dMessage}

                                 If intrested direct message the following person:
                                 **DM:** ${dUser}
                                 `)
                .setColor("#e67070")
                .setFooter(`${dMessage}`)
                .setThumbnail("https://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/48/Close-2-icon.png")

            dUser.send(`${dUser} a team recruitment post has been made by ${message.author}
                       Message made by ${ message.author}: ${dMessage}`)

            return message.channel.send(botEmbed);
        }
}