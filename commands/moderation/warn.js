const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "warn",
    category: "moderation",
    description: "Warn a user of your choice!",
    usage: "<User mention>",
    run: async (bot, message, args, guild) => {
        message.delete().catch(err => console.log(err));
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send(`Nee dit mag jij niet doen.`);
        let User = message.mentions.users.first() || null;

        if (User == null) {
            return message.channel.send(`You did not mention a user!`);
        } else {
            let Reason = message.content.slice(bot.prefix + 22 + 7) || null;
            if (Reason == null) {
                return message.channel.send(
                    `You did not specify a reason for the report!`
                );
            }
            let Avatar = User.displayAvatarURL();
            let Channel = message.guild.channels.cache.find(
                (ch) => ch.name === "💬warns"
            );
            if (!Channel)
                return message.channel.send(
                    `There is no channel in this guild which is called \`warns\``
                );
            let Embed = new MessageEmbed()
                .setTitle(`New warn!`)
                .setDescription(
                    `The moderator \`${message.author.tag}\` has reported the user \`${User.tag}\`! `
                )
                .setColor(`RED`)
                .setThumbnail(Avatar)
                .addFields(
                    { name: "Mod ID", value: `${message.author.id}`, inline: true },
                    { name: "Mod Tag", value: `${message.author.tag}`, inline: true },
                    { name: "Warned ID", value: `${User.id}`, inline: true },
                    { name: "Warned Tag", value: `${User.tag}`, inline: true },
                    { name: "Reason", value: `\`${Reason.slice(1)}\``, inline: true },
                    {
                        name: "Date (M/D/Y)",
                        value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
                        inline: true,
                    }
                );

                dUser.send(`${dUser} Je hebt een warning gekregen van ${message.author}
                Je hebt een warning ontvangen, dit stond er in de reden:
                ${ message.author}: ${dMessage}`)
        
                    message.author.send(`${message.author} Je hebt ${dUser} een warning gegeven`)

            Channel.send(Embed);
        }
    },
};