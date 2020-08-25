const discord = require("discord.js");
module.exports = {
    name: 'clear',
    category: 'server',
    description: 'clear',
    run: async (bot, message, args, guild) => {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming");

        if (!args[0]) return message.reply("Add a amount you wanna clear");

        if (Number.isInteger(parseInt(args[0]))) {

            var aantal = parseInt(args[0]) + 1;

            message.channel.bulkDelete(aantal).then(() => {

                if (args[0] == 0) {

                    message.reply(`For real? GG Reported you are trolling me, i cant remove 0 messages...`).then(msg => msg.delete({ timeout: 3000 }));

                } else if (args[0] == 1) {

                    message.reply(`I removed 1 message.`).then(msg => msg.delete({ timeout: 3000 }));

                } else {

                    message.reply(`I removed ${args[0]} messages.`).then(msg => msg.delete({ timeout: 3000 }));

                }

            });

        } else {
            return message.reply("Provide a amount");
        }
    }
}
