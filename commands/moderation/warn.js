const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "warn",
    category: "moderation",
    description: "Warn a user of your choice!",
    usage: "<User mention>",
    run: async (bot, message, args) => {
        message.delete().catch(err => console.log(err));
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send(`No.`);
        let User = message.mentions.users.first() || null;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("SOLAR - APPLICATIONS")
            .setDescription(`Congratulations! You are hereby officially accepted as a server member! We will start looking for a team for you in short order, but for now you have access to all our channels and voice channels. Once we have found a team for you, we will let you know. Do you have questions ? The easiest way to do this is by creating a ticket or by joining the voice support waiting room.

                                 **Applicant:** ${dUser}
                                 **Approved By:** ${message.author}`)
            .setColor("#6cf567")
            .setThumbnail("https://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/48/check-icon.png")

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
                (ch) => ch.name === "warns"
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
            Channel.send(Embed);
        }
    },
};